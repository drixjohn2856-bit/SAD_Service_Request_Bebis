let currentUser = null;
let requests = [];

const requestForm = document.querySelector("#request-form");
const requestRows = document.querySelector("#request-rows");
const emptyState = document.querySelector("#empty-state");
const formTitle = document.querySelector("#form-title");
const cancelButton = document.querySelector("#cancel-button");
const statusField = document.querySelector("#status-field");
const formError = document.querySelector("#form-error");
const searchInput = document.querySelector("#search-input");
const statusFilter = document.querySelector("#status-filter");
const priorityFilter = document.querySelector("#priority-filter");

const escapeHtml = (value = "") => String(value).replace(/[&<>\"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" }[character]));
const slug = (value) => String(value).toLowerCase().replaceAll(" ", "-");

async function requireUser() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  if (!user) {
    window.location.href = "login.html";
    return false;
  }
  currentUser = user;
  document.querySelector("#user-name").textContent = user.email?.split("@")[0] || "User";
  return true;
}

async function loadRequests() {
  const { data, error } = await supabaseClient.from("service_requests").select("*").order("created_at", { ascending: false });
  if (error) {
    showError(error.message);
    return;
  }
  requests = data || [];
  updateStats();
  renderRequests();
}

function updateStats() {
  document.querySelector("#total-count").textContent = requests.length;
  document.querySelector("#pending-count").textContent = requests.filter((request) => request.status === "Pending").length;
  document.querySelector("#progress-count").textContent = requests.filter((request) => request.status === "In Progress").length;
  document.querySelector("#completed-count").textContent = requests.filter((request) => request.status === "Completed").length;
}

function renderRequests() {
  const search = searchInput.value.trim().toLowerCase();
  const visibleRequests = requests.filter((request) => {
    const matchesSearch = !search || request.requester_name.toLowerCase().includes(search) || request.description.toLowerCase().includes(search);
    const matchesStatus = statusFilter.value === "All" || request.status === statusFilter.value;
    const matchesPriority = priorityFilter.value === "All" || request.priority === priorityFilter.value;
    return matchesSearch && matchesStatus && matchesPriority;
  });
  requestRows.innerHTML = visibleRequests.map((request) => `<tr>
    <td><strong>${escapeHtml(String(request.id).slice(-6))}</strong></td>
    <td><strong>${escapeHtml(request.requester_name)}</strong><span class="subline">${escapeHtml(request.description)}</span></td>
    <td>${escapeHtml(request.department)}</td>
    <td>${escapeHtml(request.category)}</td>
    <td><span class="priority priority-${slug(request.priority)}">${escapeHtml(request.priority)}</span></td>
    <td><span class="status status-${slug(request.status)}">${escapeHtml(request.status)}</span></td>
    <td>${request.created_at ? new Date(request.created_at).toLocaleDateString() : "-"}</td>
    <td><div class="actions"><button class="button button-text" type="button" data-edit="${escapeHtml(request.id)}">Edit</button><button class="button button-text" type="button" data-delete="${escapeHtml(request.id)}">Delete</button></div></td>
  </tr>`).join("");
  emptyState.classList.toggle("hidden", visibleRequests.length > 0);
}

function showError(message) { formError.textContent = message; formError.classList.remove("hidden"); }
function clearForm() { requestForm.reset(); document.querySelector("#request-id").value = ""; document.querySelector("#status").value = "Pending"; formTitle.textContent = "New request"; statusField.classList.add("hidden"); cancelButton.classList.add("hidden"); formError.classList.add("hidden"); }
function editRequest(request) { document.querySelector("#request-id").value = request.id; document.querySelector("#requester").value = request.requester_name; document.querySelector("#department").value = request.department; document.querySelector("#category").value = request.category; document.querySelector("#description").value = request.description; document.querySelector("#priority").value = request.priority; document.querySelector("#status").value = request.status; formTitle.textContent = "Edit request"; statusField.classList.remove("hidden"); cancelButton.classList.remove("hidden"); document.querySelector("#request-panel").scrollIntoView({ behavior: "smooth", block: "start" }); }

requestForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formError.classList.add("hidden");
  const requester = document.querySelector("#requester").value.trim();
  const department = document.querySelector("#department").value;
  const category = document.querySelector("#category").value;
  const description = document.querySelector("#description").value.trim();
  const priority = document.querySelector("#priority").value;
  if (!requester) return showError("Requester name is required.");
  if (!department) return showError("Department is required.");
  if (!category) return showError("Category is required.");
  if (!description) return showError("Description is required.");
  if (!["Low", "Medium", "High"].includes(priority)) return showError("Priority must be Low, Medium, or High.");
  const id = document.querySelector("#request-id").value;
  const payload = { requester_name: requester, department, category, description, priority, status: id ? document.querySelector("#status").value : "Pending", user_id: currentUser.id };
  const result = id ? await supabaseClient.from("service_requests").update(payload).eq("id", id) : await supabaseClient.from("service_requests").insert([payload]);
  if (result.error) return showError(result.error.message);
  clearForm();
  await loadRequests();
});

document.querySelector("#new-request-button").addEventListener("click", () => { clearForm(); document.querySelector("#request-panel").scrollIntoView({ behavior: "smooth" }); });
cancelButton.addEventListener("click", clearForm);
[searchInput, statusFilter, priorityFilter].forEach((control) => control.addEventListener("input", renderRequests));
requestRows.addEventListener("click", async (event) => {
  const editId = event.target.dataset.edit;
  const deleteId = event.target.dataset.delete;
  if (editId) editRequest(requests.find((request) => String(request.id) === editId));
  if (deleteId && window.confirm("Are you sure you want to delete this request?")) {
    const { error } = await supabaseClient.from("service_requests").delete().eq("id", deleteId);
    if (error) return showError(error.message);
    await loadRequests();
  }
});
document.querySelector("#logout-button").addEventListener("click", async () => { await supabaseClient.auth.signOut(); window.location.href = "login.html"; });

(async () => { if (await requireUser()) await loadRequests(); })();

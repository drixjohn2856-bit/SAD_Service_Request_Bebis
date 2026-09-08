# System Analysis

## System Title

ICT Service Request System

## Purpose

The system provides a single platform for university users to submit and manage ICT service requests. It helps users report technical issues, track the status of requests, and allows authorized staff to update or remove outdated information efficiently.

## 1. Problem Statement

The university currently has no centralized system for recording and monitoring ICT support requests. Users may submit requests through informal channels, which causes delays, poor tracking, missing information, and difficulty in managing service priorities and completion status. A structured service request system is needed to improve efficiency, accountability, and response handling.

## 2. Actors

- **Primary Actor:** System User / ICT Personnel

## 3. Use Case Diagram
<mxfile host="app.diagrams.net">
  <diagram name="Page-1" id="m-Y-hXHdqQOCtZ1EAD8s">
    <mxGraphModel grid="1" page="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-1" parent="1" style="whiteSpace=wrap;html=1;aspect=fixed;movable=0;resizable=0;rotatable=0;deletable=0;editable=0;locked=1;connectable=0;" value="" vertex="1">
          <mxGeometry height="930" width="930" x="140" y="40" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-2" parent="1" style="text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;movable=0;resizable=0;rotatable=0;deletable=0;editable=0;locked=1;connectable=0;" value="&lt;h1 style=&quot;margin-top: 0px;&quot;&gt;&amp;nbsp;ICT SERVICE REQUEST SYSTEM&lt;/h1&gt;" vertex="1">
          <mxGeometry height="120" width="430" x="390" y="53" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-4" parent="1" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;fontStyle=3" value="USER" vertex="1">
          <mxGeometry height="120" width="60" x="860" y="420" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-5" parent="1" style="ellipse;whiteSpace=wrap;html=1;shapeInside=1;" value="&lt;b&gt;&lt;i&gt;Login&lt;/i&gt;&lt;/b&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br/&gt;&lt;/div&gt;" vertex="1">
          <mxGeometry height="80" width="120" x="420" y="120" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-6" parent="1" style="ellipse;whiteSpace=wrap;html=1;shapeInside=1;fontStyle=3" value="View Dashboard&amp;nbsp;" vertex="1">
          <mxGeometry height="80" width="120" x="280" y="200" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-17" edge="1" parent="1" source="8Gsz5YY8eu5gWFNdXjcy-7" style="rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;endArrow=none;endFill=0;entryX=0.5;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;" target="8Gsz5YY8eu5gWFNdXjcy-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-7" parent="1" style="ellipse;whiteSpace=wrap;html=1;shapeInside=1;fontStyle=3" value="Create Request&amp;nbsp;" vertex="1">
          <mxGeometry height="80" width="120" x="280" y="290" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-18" edge="1" parent="1" source="8Gsz5YY8eu5gWFNdXjcy-8" style="rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;endArrow=none;endFill=0;entryX=0.5;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;" target="8Gsz5YY8eu5gWFNdXjcy-4">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="890" y="470" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-8" parent="1" style="ellipse;whiteSpace=wrap;html=1;shapeInside=1;fontStyle=3" value="View Requests&amp;nbsp;" vertex="1">
          <mxGeometry height="80" width="120" x="280" y="380" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-19" edge="1" parent="1" source="8Gsz5YY8eu5gWFNdXjcy-9" style="rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;endArrow=none;endFill=0;entryX=0.5;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;" target="8Gsz5YY8eu5gWFNdXjcy-4">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="890" y="470" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-9" parent="1" style="ellipse;whiteSpace=wrap;html=1;shapeInside=1;fontStyle=3" value="Search Request&amp;nbsp;" vertex="1">
          <mxGeometry height="80" width="120" x="280" y="480" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-11" parent="1" style="ellipse;whiteSpace=wrap;html=1;shapeInside=1;fontStyle=3" value="Filter Requests&amp;nbsp;" vertex="1">
          <mxGeometry height="80" width="120" x="280" y="570" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-12" parent="1" style="ellipse;whiteSpace=wrap;html=1;shapeInside=1;fontStyle=3" value="Update Request&amp;nbsp;" vertex="1">
          <mxGeometry height="80" width="120" x="280" y="660" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-13" parent="1" style="ellipse;whiteSpace=wrap;html=1;shapeInside=1;fontStyle=3" value="Delete Request&lt;div&gt;&lt;br&gt;&lt;/div&gt;" vertex="1">
          <mxGeometry height="80" width="120" x="280" y="760" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-23" edge="1" parent="1" source="8Gsz5YY8eu5gWFNdXjcy-14" style="rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;endArrow=none;endFill=0;" target="8Gsz5YY8eu5gWFNdXjcy-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-14" parent="1" style="ellipse;whiteSpace=wrap;html=1;shapeInside=1;fontStyle=3" value="Logout" vertex="1">
          <mxGeometry height="80" width="120" x="410" y="850" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-15" edge="1" parent="1" source="8Gsz5YY8eu5gWFNdXjcy-5" style="rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;endArrow=none;endFill=0;" target="8Gsz5YY8eu5gWFNdXjcy-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-16" edge="1" parent="1" source="8Gsz5YY8eu5gWFNdXjcy-6" style="rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;endArrow=none;endFill=0;" target="8Gsz5YY8eu5gWFNdXjcy-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-20" edge="1" parent="1" source="8Gsz5YY8eu5gWFNdXjcy-11" style="rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;startArrow=none;startFill=0;endArrow=none;endFill=0;" target="8Gsz5YY8eu5gWFNdXjcy-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-21" edge="1" parent="1" source="8Gsz5YY8eu5gWFNdXjcy-12" style="rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;endArrow=none;endFill=0;" target="8Gsz5YY8eu5gWFNdXjcy-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="8Gsz5YY8eu5gWFNdXjcy-22" edge="1" parent="1" source="8Gsz5YY8eu5gWFNdXjcy-13" style="rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0.5;entryDx=0;entryDy=0;entryPerimeter=0;endArrow=none;endFill=0;" target="8Gsz5YY8eu5gWFNdXjcy-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>


## XVI. Simple ERD

```mermaid
erDiagram
    USER ||--o{ SERVICE_REQUEST : creates

    USER {
        uuid user_id PK
        string email
    }

    SERVICE_REQUEST {
        bigint id PK
        text requester_name
        text department
        text category
        text description
        text priority
        text status
        timestamptz created_at
        uuid user_id FK
    }
```

The `USER` entity represents the authenticated user account, while each `SERVICE_REQUEST` belongs to one user and is created by that user.

## XVII. Requirements Traceability Matrix

| Req. ID | Requirement | System Feature | Test |
| --- | --- | --- | --- |
| FR-01 | User can log in | Login Page | TC-01 |
| FR-02 | User can create request | Request Form | TC-02 |
| FR-03 | User can view requests | Request Table | TC-03 |
| FR-04 | User can update request | Edit Function | TC-04 |
| FR-05 | User can delete request | Delete Function | TC-05 |
| FR-06 | User can search | Search Function | TC-06 |
| FR-07 | User can filter | Filter Function | TC-07 |
| FR-08 | System displays summaries | Dashboard | TC-08 |

This matrix shows that each system feature is directly linked to an identified requirement and a test case. It demonstrates that the application was designed based on defined user needs rather than ad hoc development.

## Non-functional Requirements

 Responsive layout for desktop and mobile browsers.
 Supabase Row Level Security should be enabled before production use.
 Publishable/anon credentials may be used in browser code; service-role credentials must never be exposed.

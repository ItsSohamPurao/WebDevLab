// src/app/api/projects/[projectId]/route.ts
import { NextResponse } from 'next/server';
import { projects } from '@/data/projects';

// In-memory data store for demonstration
let projectsData = [...projects];

// GET handler for a single project
export async function GET(
  request: Request,
  { params }: { params: { projectId: string } }
) {
  const projectId = parseInt(params.projectId, 10);
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}

// PUT handler to update a project
export async function PUT(
  request: Request,
  { params }: { params: { projectId: string } }
) {
  const projectId = parseInt(params.projectId, 10);
  const projectIndex = projectsData.findIndex(p => p.id === projectId);

  if (projectIndex === -1) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }

  try {
    const updatedData = await request.json();
    projectsData[projectIndex] = { ...projectsData[projectIndex], ...updatedData };
    return NextResponse.json(projectsData[projectIndex]);
  } catch (error) {
    return NextResponse.json({ message: 'Error parsing JSON' }, { status: 400 });
  }
}

// DELETE handler to remove a project
export async function DELETE(
  request: Request,
  { params }: { params: { projectId: string } }
) {
  const projectId = parseInt(params.projectId, 10);
  const projectIndex = projectsData.findIndex(p => p.id === projectId);

  if (projectIndex === -1) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }

  projectsData.splice(projectIndex, 1);

  return new NextResponse(null, { status: 204 }); // 204 No Content
}
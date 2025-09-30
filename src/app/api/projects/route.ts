// src/app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { projects } from '@/data/projects';

let projectsData = [...projects];

export async function GET() {
  return NextResponse.json(projectsData);
}

export async function POST(request: Request) {
  try {
    const newProject = await request.json();
    
    // Basic validation
    if (!newProject.title || !newProject.description) {
      return NextResponse.json({ message: 'Title and description are required' }, { status: 400 });
    }
    
    const projectToAdd = {
      id: projectsData.length + 1, // Simple ID generation
      ...newProject,
    };

    projectsData.push(projectToAdd);

    return NextResponse.json(projectToAdd, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error parsing JSON' }, { status: 400 });
  }
}
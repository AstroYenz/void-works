import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } },
): Promise<NextResponse> {
  const path = params.path.join('/')

  if (path === 'microsoft-identity-association.json') {
    return NextResponse.json(
      {
        associatedApplications: [
          {
            applicationId: 'aa91c15c-9263-4926-baeb-945f2877bea0',
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }

  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}

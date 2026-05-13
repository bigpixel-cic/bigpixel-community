import { client } from '@/sanity/client';
import { PROJECTS_QUERY } from '@/sanity/queries';

export default async function Page() {
  const projects = await client.fetch(PROJECTS_QUERY);

  return (
    <div>
      <h1>Projects</h1>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </div>
  );
}

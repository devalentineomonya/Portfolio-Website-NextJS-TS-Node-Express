import ToolCard from "@/components/common/tool-card";
import PageHeader from "@/components/shared/page-header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ToolTypes } from "@/types/tool";
const TOOLS_QUERY = `*[
  _type == "stack"
]{
  _id,
  name,
  link,
  image
}`;
export default async function Tools() {
  const tools = await client.fetch<ToolTypes[]>(TOOLS_QUERY);

  return (
    <div className="min-h-screen my-16       px-4">
      <div className="max-w-6xl mx-auto">
        <PageHeader
          title="Stack"
          description="I often receive many messages asking about the software and services I use in my daily life. So I decided to list everything in one place."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <ToolCard
              key={tool._id}
              name={tool.name}
              link={tool.link}
              image={urlFor(tool.image).url()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


import { LegalPageLayout } from '@/components/legal-page-layout';

const libraries = [
  { name: 'Next.js', license: 'MIT', url: 'https://github.com/vercel/next.js' },
  { name: 'React', license: 'MIT', url: 'https://github.com/facebook/react' },
  { name: 'Tailwind CSS', license: 'MIT', url: 'https://github.com/tailwindlabs/tailwindcss' },
  { name: 'Genkit', license: 'Apache-2.0', url: 'https://github.com/firebase/genkit' },
  { name: 'Shadcn/UI', license: 'MIT', url: 'https://github.com/shadcn-ui/ui' },
  { name: 'Framer Motion', license: 'MIT', url: 'https://github.com/framer/motion' },
  { name: 'Lucide React', license: 'ISC', url: 'https://github.com/lucide-icons/lucide' },
  { name: 'Zod', license: 'MIT', url: 'https://github.com/colinhacks/zod' },
];

export default function LicensesPage() {
  return (
    <LegalPageLayout title="Open Source Licenses">
      <p>
        The SYMBI0N platform is proudly built upon open-source software. We are grateful to the developers and communities who create and maintain these essential tools. Below is a list of the primary open-source libraries we use, along with their respective licenses.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Library</th>
              <th className="py-2 px-4 text-left">License</th>
            </tr>
          </thead>
          <tbody>
            {libraries.map((lib) => (
              <tr key={lib.name} className="border-b">
                <td className="py-2 px-4">
                  <a href={lib.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary/80">
                    {lib.name}
                  </a>
                </td>
                <td className="py-2 px-4">{lib.license}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       <p className="mt-8">
        This is not an exhaustive list. For a complete list of dependencies, please refer to the <code>package.json</code> file in our source code. All licenses are believed to be accurate at the time of this writing but are subject to change. Please visit the linked URLs for the most current license information.
      </p>
    </LegalPageLayout>
  );
}

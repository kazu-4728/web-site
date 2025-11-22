import { githubDocs } from '../data/github-docs';
import Section from '../components/Section';
import { BookIcon, CodeIcon, GitBranchIcon } from '../components/icons';

const resources = [
  {
    title: 'GitHub Docs（日本語）',
    description: 'GitHubの公式ドキュメント（日本語版）',
    url: 'https://docs.github.com/ja',
    icon: <BookIcon size={32} />,
  },
  {
    title: 'GitHub Docs（英語）',
    description: 'GitHubの公式ドキュメント（英語版）',
    url: 'https://docs.github.com',
    icon: <BookIcon size={32} />,
  },
  {
    title: 'Git公式ドキュメント',
    description: 'Gitの公式ドキュメント',
    url: 'https://git-scm.com/doc',
    icon: <GitBranchIcon size={32} />,
  },
  {
    title: 'GitHub Skills',
    description: 'GitHubの使い方をインタラクティブに学べる公式コース',
    url: 'https://github.com/skills',
    icon: <CodeIcon size={32} />,
  },
  {
    title: 'Learn Git Branching',
    description: 'Gitのブランチ操作を視覚的に学べるツール',
    url: 'https://learngitbranching.js.org/?locale=ja',
    icon: <GitBranchIcon size={32} />,
  },
];

export default function Page() {
  return (
    <div className="sources-page-modern">
      <Section
        title="参考資料"
        subtitle="GitHub Docsの公式リソースと参考資料"
        spacing="large"
      >
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <div className="resource-icon-wrapper">
                {resource.icon}
              </div>
              <div className="resource-content">
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="resource-arrow"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>

        <Section title="このサイトで扱っているトピック" spacing="default">
          <div className="topics-grid">
            {githubDocs.map((topic) => (
              <a key={topic.id} href={`/docs/${topic.id}/`} className="topic-link-card">
                <div className="topic-link-content">
                  <h4 className="topic-link-title">{topic.title}</h4>
                  <p className="topic-link-description">{topic.description}</p>
                </div>
              </a>
            ))}
          </div>
        </Section>
      </Section>
    </div>
  );
}

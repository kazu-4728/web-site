import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Container } from '../components/ui/Container';
import { Grid } from '../components/ui/Grid';
import { ContentCard } from '../components/cards/ContentCard';
import { BookIcon, CodeIcon, GitBranchIcon } from '../components/icons';
import { getImage } from '../lib/images';

const tutorials = [
  {
    id: 'git-basics',
    title: 'Git基礎チュートリアル',
    description: 'Gitの基本的なコマンドと概念を学びます。',
    level: '初級',
    duration: '30分',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80',
  },
  {
    id: 'first-pr',
    title: '初めてのPull Request',
    description: 'Pull Requestの作成から承認までの流れを実践します。',
    level: '初級',
    duration: '45分',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
  },
  {
    id: 'github-actions',
    title: 'GitHub Actions入門',
    description: 'CI/CDパイプラインを構築します。',
    level: '中級',
    duration: '60分',
    image: 'https://images.unsplash.com/photo-1551288049-1640f4a66fea?w=800&q=80',
  },
  {
    id: 'collaboration',
    title: 'チーム開発のベストプラクティス',
    description: '効率的なチーム開発の方法を学びます。',
    level: '中級',
    duration: '90分',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    id: 'advanced-git',
    title: '高度なGitテクニック',
    description: 'Rebase、Cherry-pick、Bisectなどを習得します。',
    level: '上級',
    duration: '120分',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
  },
  {
    id: 'security',
    title: 'GitHubセキュリティ実践',
    description: 'セキュリティスキャンと脆弱性対応を学びます。',
    level: '上級',
    duration: '90分',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
  },
];

export default function TutorialsPage() {
  return (
    <>
      <PageHeader
        title="チュートリアル"
        description="実践的なハンズオンでGitHubを学ぼう"
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80"
      />

      <ContentSection>
        <Container>
          <Grid cols={3}>
            {tutorials.map((tutorial) => (
              <ContentCard
                key={tutorial.id}
                title={tutorial.title}
                description={tutorial.description}
                image={tutorial.image}
                href={`/tutorials/${tutorial.id}`}
                badge={tutorial.level}
                meta={[
                  { icon: <BookIcon className="w-4 h-4" />, text: tutorial.duration },
                ]}
              />
            ))}
          </Grid>
        </Container>
      </ContentSection>
    </>
  );
}

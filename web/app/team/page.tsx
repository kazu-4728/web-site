import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Grid } from '../components/ui/Grid';
import { GlassCard } from '../components/ui/GlassCard';
import Image from 'next/image';

const team = [
  {
    name: '山田 太郎',
    role: 'リードエンジニア',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'フルスタック開発者。GitHubの大ファン。',
  },
  {
    name: '佐藤 花子',
    role: 'UI/UXデザイナー',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: '美しいデザインを追求するデザイナー。',
  },
  {
    name: '鈴木 一郎',
    role: 'プロダクトマネージャー',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'ユーザー体験を最優先に考えるPM。',
  },
  {
    name: '田中 美咲',
    role: 'テクニカルライター',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: '複雑な技術を分かりやすく伝える専門家。',
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="チーム紹介"
        description="情熱を持った専門家たちが作っています"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />

      <ContentSection>
        <Grid cols={4}>
          {team.map((member) => (
            <GlassCard key={member.name} hover className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary-400 mb-3">{member.role}</p>
              <p className="text-dark-300 text-sm">{member.bio}</p>
            </GlassCard>
          ))}
        </Grid>
      </ContentSection>
    </>
  );
}

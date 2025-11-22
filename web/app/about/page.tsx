import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { Grid } from '../components/ui/Grid';
import { StatCounter } from '../components/stripe/StatCounter';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="私たちについて"
        description="GitHubを愛する開発者が作った、開発者のためのガイド"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />

      <ContentSection>
        <Container size="md">
          <GlassCard className="p-12">
            <h2 className="text-3xl font-bold mb-6">私たちのミッション</h2>
            <p className="text-xl text-dark-200 leading-relaxed mb-8">
              GitHubは強力なツールですが、初心者にとっては複雑に感じることもあります。
              私たちは、誰もがGitHubを使いこなせるよう、分かりやすく実践的なガイドを提供しています。
            </p>
            <p className="text-dark-300 leading-relaxed">
              このサイトは、実際の開発現場で培った知識と経験をもとに作成されています。
              初心者から上級者まで、すべての開発者に価値を提供することを目指しています。
            </p>
          </GlassCard>
        </Container>
      </ContentSection>

      <ContentSection className="bg-dark-900/30" centered>
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-gradient">実績</span>
        </h2>
        <Grid cols={4}>
          <StatCounter value={10000} suffix="+" label="ユーザー" />
          <StatCounter value={20} label="トピック" />
          <StatCounter value={5} label="カテゴリー" />
          <StatCounter value={100} suffix="%" label="無料" />
        </Grid>
      </ContentSection>
    </>
  );
}

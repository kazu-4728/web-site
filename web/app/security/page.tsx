import { PageHeader } from '@/app/components/ui/PageHeader';
import { Container } from '@/app/components/ui/Container';
import { ContentSection } from '@/app/components/layouts/ContentSection';

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        title="セキュリティ対策"
        description="ページの説明をここに記載"
      />
      
      <ContentSection>
        <div className="prose prose-invert max-w-none">
          <p>コンテンツをここに追加してください。</p>
        </div>
      </ContentSection>
    </>
  );
}

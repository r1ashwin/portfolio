import LabTrailReviewPage, {
  getLabTrailMetadata,
  labTrailPageConfigs,
} from "@/components/LabTrailReviewPage";

export const metadata = getLabTrailMetadata(labTrailPageConfigs["tr-b"]);

export default function TrailRunningSponsoredPage() {
  return <LabTrailReviewPage pageKey="tr-b" />;
}

import LabTrailReviewPage, {
  getLabTrailMetadata,
  labTrailPageConfigs,
} from "@/components/LabTrailReviewPage";

export const metadata = getLabTrailMetadata(labTrailPageConfigs["tr-a"]);

export default function TrailRunningPlainPage() {
  return <LabTrailReviewPage pageKey="tr-a" />;
}

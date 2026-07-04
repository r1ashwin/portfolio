import LabTrailReviewPage, {
  getLabTrailMetadata,
  labTrailPageConfigs,
} from "@/components/LabTrailReviewPage";

export const metadata = getLabTrailMetadata(labTrailPageConfigs["tr-c"]);

export default function TrailRunningHiddenBenchmarkPage() {
  return <LabTrailReviewPage pageKey="tr-c" />;
}

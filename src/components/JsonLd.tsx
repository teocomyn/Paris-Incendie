import StructuredData from "@/components/StructuredData";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getFAQSchema,
  getReviewSchemas,
} from "@/lib/schema";

export default function JsonLd() {
  return (
    <StructuredData
      data={[
        getOrganizationSchema(),
        getLocalBusinessSchema(),
        getFAQSchema(),
        ...getReviewSchemas(),
      ]}
    />
  );
}

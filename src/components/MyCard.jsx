import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatusBadge from "./StatusBadge";
import photo from "../assets/ArrowRight.svg";

export default function MyCard({
  invoiceId = "RT3080",
  createdAt = "Due 19 Aug 2021",
  clientName = "Jensen Huang",
  price = "1800.90",
  status = "draft",
}) {
  return (
    <Card className="p-4">
      <CardHeader className="p-3">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="whitespace-nowrap">#{invoiceId}</CardTitle>
          <CardDescription className="whitespace-nowrap">
            {createdAt}
          </CardDescription>
          <span className="whitespace-nowrap font-medium">{clientName}</span>
          <span className="whitespace-nowrap font-bold">
            ${parseFloat(price).toFixed(2)}
          </span>
          <StatusBadge status={status} />
          <img src={photo} alt="Arrow" className="w-4 h-4" />
        </div>
      </CardHeader>
    </Card>
  );
}

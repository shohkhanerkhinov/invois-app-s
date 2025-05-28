import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatusBadge from "./StatusBadge";
import photo from '../assets/ArrowRight.svg'

export default function MyCard({
  id = "RT3080",
  date = "Due  19 Aug 2021",
  name = "Jensen Huang",
  price = "1,800.90",
  status = "draft",
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>#{id}</CardTitle>
          <CardDescription>{date}</CardDescription>
          <span>{name}</span>
          <span>{price}</span>
          <StatusBadge status={status} />
          <img
            src={photo}
            alt="Tasvir"
          />
          {/* <Image /> */}
        </div>
      </CardHeader>
    </Card>
  );
}

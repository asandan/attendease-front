import { CERTIFICATE_STATUSES } from "./constants"

export const getColorByStatus = (status: CERTIFICATE_STATUSES) => {
  switch (status) {
    case CERTIFICATE_STATUSES.PENDING:
      return "text-purple-600";
    case CERTIFICATE_STATUSES.APPROVED:
      return "text-green-600";
    case CERTIFICATE_STATUSES.REJECTED:
      return "text-red-600";
    default:
      return "text-gray-600";
  }
}
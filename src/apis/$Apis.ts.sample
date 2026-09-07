import { COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { $_API_URL } from "@/constants/apiEndpoints";
import { handleError } from "@/utils/handleError";

/** $ api */
export const $Api = handleError(async ({ $ }) => {
  return await fetch($_API_URL.$, {
    method: "POST",
    headers: COMMON_HEADERS,
    cache: "no-store",
    body: JSON.stringify({ $ }),
  });
});

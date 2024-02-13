import { post } from "@calcom/lib/fetch-wrapper";

import type { BookingCreateBody, BookingResponse } from "../types";

export const createBooking = async (data: BookingCreateBody) => {
  const response = await post<BookingCreateBody, BookingResponse>("/calendso/api/book/event", data);
  return response;
};

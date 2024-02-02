import * as queryStore from "@sanity/react-loader";

import { client } from "./client";
import { viewerToken } from "./token";

queryStore.setServerClient(client.withConfig({ token: viewerToken }));

export const { loadQuery } = queryStore;

import * as serviceBackend from "./productBackend";
import * as serviceLocalStorage from "./productLocalStorage";

export default gatewayFactory(serviceBackend, serviceLocalStorage);

/**
 * {
 *  fetch: async () => {},
 *  create: async () => {},
 *  delete: async () => {}
 * }
 */

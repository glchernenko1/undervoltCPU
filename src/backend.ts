import {
    ServerAPI
  } from "decky-frontend-lib"


  interface AddMethodArgs {
  left: number;
  right: number;
}

  
  var serverAPI: ServerAPI | undefined = undefined;
  
  export function setServerAPI(s: ServerAPI) {
    serverAPI = s;
  }


  async function backend_call<I, O>(name: string, params: I): Promise<O> {
    try {
      const res = await serverAPI!.callPluginMethod<I, O>(name, params);
      if (res.success) return res.result;
      else {
        console.error(res.result);
        throw res.result;
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  export async function add(): Promise<number> {
    return backend_call<AddMethodArgs, number>("add", {
        left: 2,
        right: 2,
      });
  }
  
  export async function addTMP(): Promise<number> {
    return backend_call<{}, number>("add_tmp",{});
  }
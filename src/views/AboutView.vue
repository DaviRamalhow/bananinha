<template>
  <div class="flex justify-center items-center min-h-screen bg-indigo-500 z-10">
    <div class="flex-1 max-w-2xl max-h-2xl p-16">

      <div class="grid grid-cols-1 grid-rows-1 gap-4 grid-flow-row-dense">
        <div class="p-4 pr-2 bg-white rounded-md shadow-2xl space-y-2 text-lg text-gray-800">
          <table class="">
            <thead>
              <tr>

                <td>Name</td>
                <td>E-mail</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="'user' + item.id">
                <td>
                  {{ item.name }}
                </td>
                <td>
                  {{ item.email }}
                </td>
                <td>
                  <div @click="OnEdit(item)"
                    class="hover:cursor-pointer border border-solid rounded-xl border-gray-200 shadow-lg hover:scale-110 ease-in-out duration-500 text-md">
                    <ui-icon name="edit" class="color text-green-500" />
                    <p class=" text-green-500">edit</p>
                  </div>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    </div>
    <CompModal v-if="form">
      <div class="grid grid-cols-1 grid-rows-1 gap-4 grid-flow-row-dense mt-5">
        <div class="p-1 pr-2 space-y-2 text-lg">
          <label class="">Name</label>
          <input type="name" class="border border-solid border-black mx-2 rounded-lg px-2" v-model="data.name">
          <span v-for="error in v$.name.$errors" :key="error.$uid" class="text-sm text-red-500 font-mono">
            {{ error.$property }} - {{ error.$message }}
          </span>
          <br>
          <label for="">E-mail</label>
          <input type="email" class="border border-solid border-black mx-2 rounded-lg px-2 mb-2" v-model="data.email">
          <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-sm text-red-500 font-mono">
            {{ error.$property }} - {{ error.$message }}
          </span>
          <br>
          <button @click="OnSave"
            class="bg-indigo-500 border-2 border-solid border-black px-2 rounded-lg text-white">Save</button>
        </div>
      </div>
    </CompModal>
  </div>
</template>

<script lang="ts" setup>
import { required, email, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { onMounted, Ref, ref } from "vue";
import utils, { Cookie } from "../utils/cookie";

const form = ref(false);
const data = ref({
  id: 0,
  name: "",
  email: "",
  username: "",
});

const rules = {
  email: { required, email },
  username: { required },
  name: { required, minLength: minLength(3) },
};
const v$ = useVuelidate(rules, data);

interface User {
  name: string,
  id: number,
  email: string,
}

const users: Ref<User[]> = ref([]);

const url = "http://server.andrewcaires.me:3050/api/users";

const api = async (patch: string, opts: any = {}, body?: any) => {
  const token = Cookie.get("token");
  if (token) {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": token,
    };

    body = body ? JSON.stringify(body) : undefined;

    const response = await fetch(url + patch, {
      method: "GET",
      ...opts,
      headers: {
        ...headers,
        ...(opts.headers || {}),
      },
      body,
    });
    return { error: response.status != 200, data: await response.json() };
  }
  return { error: true };
};

const OnEdit = async (item: User) => {
  const response = await api("/" + item.id);
  if (!response.error) {
    form.value = true;
    data.value = response.data;
  }
};

const OnSave = async () => {
  const response = await api("/" + data.value.id, {
    method: "PUT",
  }, data.value);
  if (!response.error) {
    await OnLoad();
  } else {
    console.log(response);
  }
  const result = await v$.value.$validate();
  if (result) {
    form.value = false;
  } else {
    alert("error");
  }
};

const OnLoad = async () => {
  const response = await api("");
  if (!response?.error) {
    users.value = response.data.records;
  }
};

onMounted(async () => {
  await OnLoad();
});



// if (!data.value.email) {
//   data.value.errors.push("O e-mail é obrigatório.");
// } else if (!data.value.validEmail(data.value.email)) {
//   data.value.errors.push("Utilize um e-mail válido.");
// }
</script>

<style lang="scss" scoped>
table {
  width: 100%;

  td {
    padding: 10px 15px;
  }
}
</style>
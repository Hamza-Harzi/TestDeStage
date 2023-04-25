<script setup lang="ts">
const user = useState("user", () => null);
const { supabase } = useSupabase();
const router = useRouter();
supabase.auth.onAuthStateChange((e, session) => {
  user.value = session?.user || null;
});
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  router.push("/");
};

const isLoggedIn = () => {
  return !!user.value;
};
</script>
<template>
  <nav class="bg-black text-white h-16">
    <ul class="flex items-center p-px">
      <li class="mt-3 ml-10 pr-20 w-2 text-xl font-bold">
        <NuxtLink class="" to="/">Home</NuxtLink>
      </li>
      <li class="mt-3 ml-10 w-60 text-xl font-bold">
        <NuxtLink to="/myprofile">Profile</NuxtLink>
      </li>
      <li class="mt-3 ml-1 w-60 text-xl font-bold">
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
      <li
        class="ml-auto mt-3 pl-4 w-60 h-10 text-xl font-bold cursor-pointer"
        @click="signOut"
      >
        Logout
      </li>
    </ul>
  </nav>
</template>
<!-- 4fAdy6Qq9t7UZsuz -->

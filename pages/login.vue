<script setup lang="ts">
const user = useState("user", () => null);
const { supabase } = useSupabase();
const router = useRouter();
supabase.auth.onAuthStateChange((e, session) => {
  user.value = session?.user || null;
});

const email = ref("");
const password = ref("");

const signIn = async () => {
  const { user: u, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  router.push("/myprofile");
  if (error) throw error;
  return u;
};
</script>

<template>
  <div>
    <div
      class="scroll-p-10 w-2/5 m-96 bg-slate-400 mb-60 mr-60 py-11 text-center h-1/3"
    >
      <h3 class="text-2xl font-bold my-10">Login</h3>
      <div class="flex flex-col mb-9">
        <div class="mb-4">
          <label class="" for="">Email:</label>
          <input class="ml-10 pr-8" placeholder="Email" />
        </div>
        <div>
          <label for="">Password:</label>
          <input class="ml-3 pr-8" placeholder="Password" type="password" />
        </div>
        <!-- <div>
          <label for="">Confirm Password:</label>
          <input
            class="ml-4 pr-8 mt-3"
            placeholder="Confirm Password"
            type="password"
          />
        </div> -->
      </div>
      <Button @click="signIn">Submit</Button>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

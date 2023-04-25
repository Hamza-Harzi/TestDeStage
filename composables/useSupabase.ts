import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvaHpoc2JmZGpuamRiaXh6bWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNDU1NjcsImV4cCI6MTk5NzkyMTU2N30.0EwkfECk_7XY1wyeQ2Twa51SPB9J7yISNt5CoHQqnws"
const SUPABASE_URL = "https://cohzhsbfdjnjdbixzmft.supabase.co"
const useSupabase = () => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    return {
        supabase
    }
}

export default useSupabase
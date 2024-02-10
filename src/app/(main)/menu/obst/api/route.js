import { supabase } from '@/lib/supabase'

export async function GET() {
  let { data: menu, error } = await supabase
    .from('menu')
    .select('*')
    .eq('type', 'obst')
  if (error) {
    console.log(error)
  }
  console.log(menu)
  return menu || []
}
  const data = await res.json()

  return Response.json({ data })
}
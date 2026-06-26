"use server"

import { contactFormSchema } from "../lib/zodSchema"

export async function formAction(prevState: unknown, formData: FormData) {
  // retorna objeto (result):
  // {
  //    success: true ou false,
  //    error: Error [ZodError]:{...} ou undefined,
  //    data:{...}
  // }

  // 1. validar form
  // Object.fromEntries(formData) converte tudo em objeto de uma vez
  // melhor que converter um por um com formData.get()
  const result = contactFormSchema.safeParse(Object.fromEntries(formData))

  // 2. tratar erros
  if (!result.success) {
    return {
      status: "error",
      errors: result.error.flatten().fieldErrors,
      // envia para o client component os erros assim:
      // data.errors?.name?.[0]
      // data.errors?.email?.[0]
      // data.errors?.subject?.[0]
      // data.errors?.message?.[0]
    }
  }

  // 3. preparar dados
  const { name, email, subject, message } = result.data
  console.log("resultado do sucesso: ", result.data)

  // 4. retornar dados
  return {
    status: "success",
    message: "message sent successfully",
    data: result.data,
  }
}

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
      status: "error", // usar quando houver problema no servidor, sem wifi, etc
      errors: result.error.flatten().fieldErrors, // usar quando houver falha de validacao
      // envia para o client component os erros assim:
      // data.errors?.name?.[0] - mesmo para email, subject, message
    }
  }

  // 3. preparar dados
  const { name, email, subject, message } = result.data

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  })

  const data = await response.json()
  console.log("DATA DO FETCH: ", data)
  if (!data.success) {
    return {
      status: "error",
      message: data.message,
    }
  }

  // 4. retornar dados
  return {
    status: "success",
    message: "message sent successfully",
    formContent: result.data,
  }
}

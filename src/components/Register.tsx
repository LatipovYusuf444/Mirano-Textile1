import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

/**
 * ================================
 * ZOD VALIDATION SCHEMA
 * ================================
 */
const registerSchema = z.object({
  first_name: z.string().min(2, "Ism kamida 2 ta harf bo‘lishi kerak"),
  last_name: z.string().min(2, "Familya kamida 2 ta harf bo‘lishi kerak"),
  phone: z
    .string()
    .min(9, "Telefon raqam noto‘g‘ri")
    .regex(/^[0-9+]+$/, "Faqat raqam bo‘lishi kerak"),
  email: z.string().email("Email noto‘g‘ri formatda"),
})

type RegisterForm = z.infer<typeof registerSchema>

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // 🔵 HOME PAGEGA YO‘NALTIRISH UCHUN
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterForm) => {
    setLoading(true)

    console.log("REGISTER DATA SENT TO BACKEND:", data)

    // 🔴 REAL BACKEND UCHUN (ochib ishlatish mumkin)
    // await fetch("https://api.sizningsayt.uz/api/register/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })

    setTimeout(() => {
      setSuccess(true)
      setLoading(false)

      // ✅ 1.5 soniyadan keyin HOME PAGEGA O‘TADI
      setTimeout(() => {
        navigate("/")
      }, 1500)

    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          ✨ Premium Register
        </h1>

        {success ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center text-green-400"
          >
            <h2 className="text-2xl font-semibold">✅ Muvaffaqiyatli</h2>
            <p className="text-white/60 mt-2">
              Siz ro‘yxatdan o‘tdingiz
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Ism"
                {...register("first_name")}
                className="bg-black/40 text-white border-white/20 focus:border-orange-400"
              />
              {errors.first_name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                placeholder="Familya"
                {...register("last_name")}
                className="bg-black/40 text-white border-white/20 focus:border-orange-400"
              />
              {errors.last_name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                placeholder="Telefon raqam"
                {...register("phone")}
                className="bg-black/40 text-white border-white/20 focus:border-orange-400"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="bg-black/40 text-white border-white/20 focus:border-orange-400"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-gradient-to-r from-orange-400 to-yellow-500 text-black font-semibold rounded-xl shadow-lg hover:shadow-orange-500/40"
              >
                {loading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
              </Button>
            </motion.div>
          </form>
        )}

        <p className="text-center text-white/50 text-sm mt-6">
          Premium tizimga xush kelibsiz 🚀
        </p>
      </motion.div>
    </div>
  )
}

export default Register

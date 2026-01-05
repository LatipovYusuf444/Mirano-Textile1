import { useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Mail, Phone, User2, Sparkles } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// Agar siz registerUser service ishlatayotgan bo‘lsangiz, ulab qo‘yamiz:
import { registerUser } from "@/features/auth-service";

// ✅ Textile background (o'zingizni rasmingiz)
import bg from "@/assets/images/v748-toon-131.webp";

const schema = z.object({
  first_name: z.string().min(2, "Ism kamida 2 ta harf bo‘lsin"),
  last_name: z.string().min(2, "Familiya kamida 2 ta harf bo‘lsin"),
  email: z.string().email("Email noto‘g‘ri formatda"),
  phone: z
    .string()
    .regex(/^\+998\d{9}$/, "Telefon +998XXXXXXXXX ko‘rinishida bo‘lsin"),
});

type FormState = z.infer<typeof schema>;

export default function Register() {
  const [form, setForm] = useState<FormState>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "+998",
  });

  const [loading, setLoading] = useState(false);

  const onChange =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;

      // phone uchun: doim +998 bilan boshlansin, foydalanuvchi o‘chirib yubormasin
      if (key === "phone") {
        if (!v.startsWith("+998")) {
          setForm((p) => ({ ...p, phone: "+998" }));
          return;
        }
      }

      setForm((p) => ({ ...p, [key]: v }));
    };

  const errors = useMemo(() => {
    const parsed = schema.safeParse(form);
    if (parsed.success) return {};
    const map: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const k = issue.path[0] as string;
      if (!map[k]) map[k] = issue.message;
    }
    return map;
  }, [form]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      parsed.error.issues.forEach((i) => toast.error(i.message));
      return;
    }

    try {
      setLoading(true);

      // ✅ Backendga yuborish (sizning service endpointingiz register/ bo‘lsa ishlaydi)
      await registerUser({
        first_name: parsed.data.first_name,
        last_name: parsed.data.last_name,
        email: parsed.data.email,
        phone: parsed.data.phone,
      });

      toast.success("✅ Muvaffaqiyatli ro‘yxatdan o‘tildi");
      setForm({ first_name: "", last_name: "", email: "", phone: "+998" });
    } catch (err: any) {
      toast.error(err?.message || "Xatolik");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Luxury overlays: dark + vignette + texture */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_20%,rgba(255,180,80,0.16),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-40 [background:radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.8))]" />

      {/* Floating glow dots */}
      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-orange-500/20"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl bg-white/10"
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-lg"
        >
          {/* Card */}
          <div className="relative rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.65)] overflow-hidden">
            {/* Shine animation */}
            <motion.div
              className="absolute -inset-[80%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-30%", "130%"] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
            />

            <div className="relative p-7 sm:p-9">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-orange-200/90 text-xs font-semibold tracking-[0.25em] uppercase">
                    <Sparkles size={14} />
                    Premium Registration
                  </div>
                  <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    Ro‘yxatdan o‘tish
                  </h1>
                  <p className="mt-2 text-white/65 text-sm">
                    Textile kolleksiyamizga kirish uchun ma’lumotlarni kiriting.
                  </p>
                </div>

                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
                  <span className="text-orange-200 font-bold">MT</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={submit} className="mt-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-white/70">Ism</label>
                    <div className="relative">
                      <User2 className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45" size={18} />
                      <Input
                        value={form.first_name}
                        onChange={onChange("first_name")}
                        placeholder="Masalan: Dilshod"
                        className="pl-10 bg-white/10 border-white/15 text-white placeholder:text-white/35"
                      />
                    </div>
                    {errors.first_name && (
                      <p className="text-[12px] text-orange-200/90">{errors.first_name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-white/70">Familiya</label>
                    <div className="relative">
                      <User2 className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45" size={18} />
                      <Input
                        value={form.last_name}
                        onChange={onChange("last_name")}
                        placeholder="Masalan: Karimov"
                        className="pl-10 bg-white/10 border-white/15 text-white placeholder:text-white/35"
                      />
                    </div>
                    {errors.last_name && (
                      <p className="text-[12px] text-orange-200/90">{errors.last_name}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-white/70">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45" size={18} />
                    <Input
                      value={form.email}
                      onChange={onChange("email")}
                      placeholder="name@example.com"
                      className="pl-10 bg-white/10 border-white/15 text-white placeholder:text-white/35"
                    />
                  </div>
                  {errors.email && <p className="text-[12px] text-orange-200/90">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-white/70">Telefon</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45" size={18} />
                    <Input
                      value={form.phone}
                      onChange={onChange("phone")}
                      placeholder="+998901234567"
                      className="pl-10 bg-white/10 border-white/15 text-white placeholder:text-white/35"
                    />
                  </div>
                  <p className="text-[12px] text-white/45">
                    Format: <span className="text-white/65">+998XXXXXXXXX</span>
                  </p>
                  {errors.phone && <p className="text-[12px] text-orange-200/90">{errors.phone}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full h-12 rounded-2xl
                    bg-gradient-to-r from-orange-400 to-amber-200
                    text-black font-semibold
                    shadow-[0_18px_60px_rgba(255,165,0,0.25)]
                    hover:opacity-95 transition
                  "
                >
                  {loading ? "Yuborilmoqda..." : "Ro‘yxatdan o‘tish"}
                </Button>

                <div className="pt-2 text-center text-xs text-white/45">
                  Davom etish orqali siz{" "}
                  <span className="text-white/70">shartlar</span>ga rozilik bildirasiz.
                </div>
              </form>
            </div>
          </div>

          {/* bottom subtle text */}
          <motion.p
            className="mt-6 text-center text-xs text-white/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Mirano Textile • Premium Experience
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}


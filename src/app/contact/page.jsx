import { ContactForm } from "@/components/contact_form";

export default function ConctactPage() {
  return (
    <main className="flex flex-col gap-12 mt-24 lg:gap-[100px] lg:mt-[120px]">
      <section>
        <div className="m-auto w-[85%] lg:w-[60%]">
          <h1 className="font-bold mb-9 text-white text-3xl lg:text-5xl">
            Contact Me <span className="animate-bounce inline-block">🤟</span>
          </h1>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { createWhatsAppHref, defaultWhatsAppHref } from "../whatsapp";

const experienceOptions = [
  "Não, será a primeira",
  "Sim, algumas",
  "Sim, já tenho bastante",
] as const;

const bodyAreaOptions = [
  "Braço fechado",
  "Antebraço",
  "Perna",
  "Costas",
  "Peito",
  "Outro",
] as const;

const tattooSizeOptions = [
  "Pequena",
  "Média",
  "Grande",
  "Fechamento / projeto maior",
] as const;

const styleOptions = [
  "Realismo",
  "Fine line",
  "Blackwork",
  "Não sei, quero orientação",
] as const;

const timelineOptions = [
  "O quanto antes",
  "Nas próximas semanas",
  "Nos próximos meses",
  "Só estou pesquisando",
] as const;

const budgetOptions = [
  "Até R$500",
  "R$500 - R$1.500",
  "R$1.500 - R$3.000",
  "Acima de R$3.000",
  "Prefiro entender o projeto primeiro",
] as const;

const inputClassName =
  "w-full border border-white/14 bg-black/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#EF0020] focus:bg-[#0b0b0b] focus:shadow-[0_0_0_1px_rgba(239,0,32,0.28),0_0_24px_rgba(239,0,32,0.16)]";

const choiceClassName =
  "flex min-h-full items-center border border-white/12 bg-black/72 px-4 py-4 text-sm leading-6 text-white/72 transition duration-200 peer-checked:border-[#EF0020] peer-checked:bg-[linear-gradient(180deg,rgba(239,0,32,0.18),rgba(239,0,32,0.05))] peer-checked:text-white peer-checked:shadow-[0_0_0_1px_rgba(239,0,32,0.26),0_0_26px_rgba(239,0,32,0.12)] peer-focus-visible:border-[#EF0020] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#EF0020]";

type ChoiceFieldsetProps = {
  legend: string;
  name: string;
  options: readonly string[];
  columns?: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
};

function ChoiceFieldset({
  legend,
  name,
  options,
  columns = "md:grid-cols-2",
  selectedValue,
  onChange,
}: ChoiceFieldsetProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-[0.72rem] uppercase tracking-[0.3em] text-white/46">
        {legend}
      </legend>
      <div className={`grid gap-3 ${columns}`}>
        {options.map((option) => (
          <label key={option} className="block cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue ? selectedValue === option : undefined}
              onChange={
                onChange ? (event) => onChange(event.target.value) : undefined
              }
              required
              className="peer sr-only"
            />
            <span className={choiceClassName}>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ContactSection() {
  const [selectedBodyArea, setSelectedBodyArea] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const bodyArea = String(formData.get("bodyArea") ?? "");
    const bodyAreaOther = String(formData.get("bodyAreaOther") ?? "").trim();

    if (bodyArea === "Outro" && !bodyAreaOther) {
      form
        .querySelector<HTMLInputElement>('input[name="bodyAreaOther"]')
        ?.focus();
      return;
    }

    const resolvedBodyArea =
      bodyArea === "Outro" ? `Outro: ${bodyAreaOther}` : bodyArea;

    const message = [
      "Oi, vim pelo site e quero solicitar a análise do meu projeto de tattoo.",
      "",
      "*Dados básicos*",
      `Nome completo: ${String(formData.get("fullName") ?? "").trim()}`,
      `WhatsApp: ${String(formData.get("whatsapp") ?? "").trim()}`,
      `E-mail: ${String(formData.get("email") ?? "").trim()}`,
      "",
      "*Contexto do cliente*",
      `Já tem tatuagens: ${String(formData.get("experience") ?? "").trim()}`,
      "",
      "*Ideia do projeto*",
      String(formData.get("idea") ?? "").trim(),
      "",
      "*Local do corpo*",
      resolvedBodyArea,
      "",
      "*Tamanho aproximado*",
      String(formData.get("size") ?? "").trim(),
      "",
      "*Estilo de referência*",
      String(formData.get("style") ?? "").trim(),
      "",
      "*Prazo*",
      String(formData.get("timeline") ?? "").trim(),
      "",
      "*Investimento em mente*",
      String(formData.get("budget") ?? "").trim(),
      "",
      "*Compromisso*",
      "Ciente sobre projeto personalizado, vagas limitadas e análise prévia: Sim",
    ].join("\n");

    const whatsappHref = createWhatsAppHref(message);
    const popup = window.open(whatsappHref, "_blank", "noopener,noreferrer");

    if (!popup) {
      let counter = 0;
      while (counter < 4) {
        const popup = window.open(
          whatsappHref,
          "_blank",
          "noopener,noreferrer",
        );
        if (popup) {
          break;
        }
        counter++;
      }
    }
  };

  return (
    <section
      id="contato"
      className="section-frame overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden border border-[#EF0020]/30 bg-[#040404] shadow-[0_0_55px_rgba(239,0,32,0.12)]">
          <div className="absolute left-0 top-0 h-2 w-36 bg-[#EF0020] shadow-[0_0_26px_rgba(239,0,32,0.9)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,0,32,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(239,0,32,0.1),transparent_26%)]" />
          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:p-12">
            <div className="space-y-8">
              <div>
                <p className="section-kicker text-[#ff8797]">BRIEFING FINAL</p>
                <h2 className="font-display mt-4 max-w-xl text-4xl leading-none tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  Solicite a análise do seu projeto.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/62 sm:text-base">
                  Preencha o briefing com calma. Assim o contato no WhatsApp já
                  chega com contexto, intenção e faixa de investimento para o
                  projeto.
                </p>
              </div>

              <div className="grid gap-px bg-white/10">
                <div className="bg-black/92 px-5 py-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ff8797]">
                    o que acontece depois
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    Seu envio abre o WhatsApp com a mensagem pronta. A análise
                    considera ideia, local do corpo, tamanho, estilo, prazo e
                    investimento.
                  </p>
                </div>
                <div className="bg-black/92 px-5 py-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ff8797]">
                    atendimento direto
                  </p>
                  <div className="mt-4 flex flex-col gap-4">
                    <a
                      href={defaultWhatsAppHref}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-button brutal-button-secondary"
                    >
                      FALAR NO WHATSAPP
                    </a>
                    <a
                      href="https://instagram.com/sauer.tattoos"
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-button brutal-button-ghost"
                    >
                      VER INSTAGRAM
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-3 md:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="text-[0.72rem] uppercase tracking-[0.3em] text-white/46"
                  >
                    Nome completo
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    className={inputClassName}
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="whatsapp"
                    className="text-[0.72rem] uppercase tracking-[0.3em] text-white/46"
                  >
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    required
                    className={inputClassName}
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="text-[0.72rem] uppercase tracking-[0.3em] text-white/46"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={inputClassName}
                    placeholder="voce@email.com"
                  />
                </div>
              </div>

              <ChoiceFieldset
                legend="Você já tem tatuagens?"
                name="experience"
                options={experienceOptions}
              />

              <div className="space-y-3">
                <label
                  htmlFor="idea"
                  className="text-[0.72rem] uppercase tracking-[0.3em] text-white/46"
                >
                  Descreva a ideia da sua tatuagem
                </label>
                <textarea
                  id="idea"
                  name="idea"
                  required
                  rows={6}
                  className={`${inputClassName} min-h-[10rem] resize-y`}
                  placeholder="Explique conceito, referências, significado e qualquer detalhe importante do projeto."
                />
              </div>

              <div className="space-y-4">
                <ChoiceFieldset
                  legend="Onde pretende tatuar?"
                  name="bodyArea"
                  options={bodyAreaOptions}
                  columns="md:grid-cols-3"
                  selectedValue={selectedBodyArea}
                  onChange={setSelectedBodyArea}
                />
                {selectedBodyArea === "Outro" ? (
                  <div className="space-y-3">
                    <label
                      htmlFor="bodyAreaOther"
                      className="text-[0.72rem] uppercase tracking-[0.3em] text-white/46"
                    >
                      Outro local
                    </label>
                    <input
                      id="bodyAreaOther"
                      name="bodyAreaOther"
                      type="text"
                      required
                      className={inputClassName}
                      placeholder="Descreva a área do corpo"
                    />
                  </div>
                ) : null}
              </div>

              <ChoiceFieldset
                legend="Qual o tamanho da tatuagem?"
                name="size"
                options={tattooSizeOptions}
                columns="md:grid-cols-2"
              />

              <ChoiceFieldset
                legend="Você tem alguma referência de estilo?"
                name="style"
                options={styleOptions}
                columns="md:grid-cols-2"
              />

              <ChoiceFieldset
                legend="Quando você pretende fazer sua tatuagem?"
                name="timeline"
                options={timelineOptions}
                columns="md:grid-cols-2"
              />

              <ChoiceFieldset
                legend="Você já tem um investimento em mente para esse projeto?"
                name="budget"
                options={budgetOptions}
                columns="md:grid-cols-2"
              />

              <fieldset className="space-y-3">
                <legend className="text-[0.72rem] uppercase tracking-[0.3em] text-white/46">
                  Compromisso
                </legend>
                <label className="block cursor-pointer">
                  <input
                    type="checkbox"
                    name="commitment"
                    value="Sim"
                    required
                    className="peer sr-only"
                  />
                  <span className={choiceClassName}>
                    Estou ciente que se trata de um projeto personalizado, com
                    vagas limitadas e análise prévia.
                  </span>
                </label>
              </fieldset>

              <div className="border-t border-white/10 pt-2">
                <button
                  type="submit"
                  className="brutal-button brutal-button-primary w-full shadow-[0_0_32px_rgba(239,0,32,0.24)]"
                >
                  ENVIAR E SOLICITAR ANÁLISE DO PROJETO
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

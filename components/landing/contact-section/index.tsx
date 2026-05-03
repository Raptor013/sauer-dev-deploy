"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
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

const steps = [
  {
    label: "Seus dados",
    title: "Vamos começar pelo básico.",
    description:
      "Esses dados ajudam a organizar o retorno e deixam o atendimento mais direto desde a primeira mensagem.",
  },
  {
    label: "Projeto",
    title: "Agora me conte sobre a tattoo.",
    description:
      "Quanto mais contexto você trouxer aqui, mais precisa fica a análise do projeto e da viabilidade da ideia.",
  },
  {
    label: "Planejamento",
    title: "Vamos alinhar momento e expectativa.",
    description:
      "Prazo e faixa de investimento ajudam a orientar escala, encaixe de agenda e o melhor formato para o projeto.",
  },
  {
    label: "Confirmação",
    title: "Tudo pronto para abrir o WhatsApp.",
    description:
      "Revise as respostas com calma. Quando você enviar, o WhatsApp já abre com o briefing estruturado.",
  },
] as const;

const processItems = [
  "Você preenche o briefing em etapas curtas e objetivas.",
  "Eu recebo seu contexto com mais clareza antes da conversa.",
  "A resposta acontece com mais direção sobre ideia, escala e próximo passo.",
] as const;

const inputClassName =
  "w-full border border-white/14 bg-black/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#EF0020] focus:bg-[#0b0b0b] focus:shadow-[0_0_0_1px_rgba(239,0,32,0.28),0_0_24px_rgba(239,0,32,0.16)]";

const choiceClassName =
  "flex min-h-full items-center border border-white/12 bg-black/72 px-4 py-4 text-sm leading-6 text-white/72 transition duration-200 peer-checked:border-[#EF0020] peer-checked:bg-[linear-gradient(180deg,rgba(239,0,32,0.18),rgba(239,0,32,0.05))] peer-checked:text-white peer-checked:shadow-[0_0_0_1px_rgba(239,0,32,0.26),0_0_26px_rgba(239,0,32,0.12)] peer-focus-visible:border-[#EF0020] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#EF0020]";

const errorClassName = "text-xs leading-5 text-[#ff9aa7]";

type BriefingFormValues = {
  fullName: string;
  whatsapp: string;
  email: string;
  experience: string;
  idea: string;
  bodyArea: string;
  bodyAreaOther: string;
  timeline: string;
  budget: string;
  commitment: boolean;
};

type BriefingFormField = keyof BriefingFormValues;

type FieldErrors = Partial<Record<BriefingFormField, string>>;

type ChoiceFieldsetProps = {
  legend: string;
  name: BriefingFormField;
  options: readonly string[];
  value: string;
  onChange: (name: BriefingFormField, value: string) => void;
  columns?: string;
  error?: string;
};

const initialFormValues: BriefingFormValues = {
  fullName: "",
  whatsapp: "",
  email: "",
  experience: "",
  idea: "",
  bodyArea: "",
  bodyAreaOther: "",
  timeline: "",
  budget: "",
  commitment: false,
};

function getWhatsappDigits(value: string) {
  return value.replace(/\D/g, "").slice(0, 11);
}

function formatWhatsapp(value: string) {
  const digits = getWhatsappDigits(value);

  if (digits.length <= 2) {
    return digits ? `(${digits}` : "";
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validateStep(
  stepIndex: number,
  values: BriefingFormValues,
): FieldErrors {
  const errors: FieldErrors = {};

  if (stepIndex === 0) {
    if (values.fullName.trim().length < 3) {
      errors.fullName = "Informe seu nome completo para seguir.";
    }

    if (getWhatsappDigits(values.whatsapp).length < 10) {
      errors.whatsapp = "Preencha um WhatsApp válido com DDD.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errors.email = "Digite um e-mail válido.";
    }
  }

  if (stepIndex === 1) {
    if (!values.experience) {
      errors.experience = "Selecione como está sua experiência com tatuagens.";
    }

    if (values.idea.trim().length < 24) {
      errors.idea =
        "Descreva um pouco mais sua ideia para eu entender melhor o projeto.";
    }

    if (!values.bodyArea) {
      errors.bodyArea = "Escolha a região do corpo desejada.";
    }

    if (values.bodyArea === "Outro" && values.bodyAreaOther.trim().length < 3) {
      errors.bodyAreaOther = "Descreva a área do corpo com mais clareza.";
    }
  }

  if (stepIndex === 2) {
    if (!values.timeline) {
      errors.timeline = "Selecione quando pretende fazer a tatuagem.";
    }

    if (!values.budget) {
      errors.budget = "Escolha a faixa que melhor representa sua expectativa.";
    }
  }

  if (stepIndex === 3 && !values.commitment) {
    errors.commitment =
      "Você precisa confirmar que entendeu como funciona a análise.";
  }

  return errors;
}

function findFirstInvalidStep(
  values: BriefingFormValues,
  maxStepIndex = steps.length - 1,
) {
  for (let stepIndex = 0; stepIndex <= maxStepIndex; stepIndex += 1) {
    if (Object.keys(validateStep(stepIndex, values)).length > 0) {
      return stepIndex;
    }
  }

  return -1;
}

function buildWhatsAppMessage(values: BriefingFormValues) {
  const resolvedBodyArea =
    values.bodyArea === "Outro"
      ? `Outro: ${values.bodyAreaOther.trim()}`
      : values.bodyArea;

  return [
    "Oi, vim pelo site e quero solicitar a análise do meu projeto de tattoo.",
    "",
    "*Dados básicos*",
    `Nome completo: ${values.fullName.trim()}`,
    `WhatsApp: ${values.whatsapp.trim()}`,
    `E-mail: ${values.email.trim()}`,
    "",
    "*Contexto do cliente*",
    `Já tem tatuagens: ${values.experience}`,
    "",
    "*Ideia do projeto*",
    values.idea.trim(),
    "",
    "*Local do corpo*",
    resolvedBodyArea,
    "",
    "*Prazo*",
    values.timeline,
    "",
    "*Investimento em mente*",
    values.budget,
    "",
    "*Compromisso*",
    "Ciente sobre projeto personalizado, vagas limitadas e análise prévia: Sim",
  ].join("\n");
}

function isFocusableField(
  element: Element | null,
): element is HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement {
  return Boolean(
    element &&
    (element instanceof HTMLInputElement ||
      element instanceof HTMLTextAreaElement ||
      element instanceof HTMLSelectElement),
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className={errorClassName}>{message}</p>;
}

function ChoiceFieldset({
  legend,
  name,
  options,
  value,
  onChange,
  columns = "md:grid-cols-2",
  error,
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
              checked={value === option}
              onChange={(event) => onChange(name, event.target.value)}
              className="peer sr-only"
            />
            <span className={choiceClassName}>{option}</span>
          </label>
        ))}
      </div>
      <FieldError message={error} />
    </fieldset>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2 border border-white/8 bg-black/45 p-4">
      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/36">
        {label}
      </p>
      <p className="text-sm leading-6 text-white/78">{value}</p>
    </div>
  );
}

type ContactSectionProps = {
  onDialogOpenChange?: (isOpen: boolean) => void;
};

export function ContactSection({
  onDialogOpenChange,
}: ContactSectionProps = {}) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showStepErrors, setShowStepErrors] = useState(false);
  const [mobileDialogHeight, setMobileDialogHeight] = useState<number | null>(
    null,
  );
  const [isMobileKeyboardOpen, setIsMobileKeyboardOpen] = useState(false);
  const [formValues, setFormValues] =
    useState<BriefingFormValues>(initialFormValues);

  const currentStepData = steps[currentStep];
  const currentErrors = validateStep(currentStep, formValues);
  const progressPercent = ((currentStep + 1) / steps.length) * 100;
  const resolvedBodyArea =
    formValues.bodyArea === "Outro"
      ? formValues.bodyAreaOther.trim()
      : formValues.bodyArea;
  const dialogStyle = mobileDialogHeight
    ? ({
        "--dialog-mobile-height": `${mobileDialogHeight}px`,
      } as CSSProperties)
    : undefined;

  useEffect(() => {
    if (!isDialogOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isDialogOpen]);

  useEffect(() => {
    if (!isDialogOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDialogOpen(false);
        setShowStepErrors(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isDialogOpen]);

  useEffect(() => {
    onDialogOpenChange?.(isDialogOpen);

    return () => {
      onDialogOpenChange?.(false);
    };
  }, [isDialogOpen, onDialogOpenChange]);

  useEffect(() => {
    if (!isDialogOpen) {
      return;
    }

    const updateMobileDialogHeight = () => {
      const viewport = window.visualViewport;
      const nextHeight = viewport?.height ?? window.innerHeight;
      const keyboardHeight = window.innerHeight - nextHeight;

      setMobileDialogHeight(Math.round(nextHeight));
      setIsMobileKeyboardOpen(window.innerWidth < 1024 && keyboardHeight > 160);
    };

    updateMobileDialogHeight();

    const viewport = window.visualViewport;
    window.addEventListener("resize", updateMobileDialogHeight);
    viewport?.addEventListener("resize", updateMobileDialogHeight);
    viewport?.addEventListener("scroll", updateMobileDialogHeight);

    return () => {
      window.removeEventListener("resize", updateMobileDialogHeight);
      viewport?.removeEventListener("resize", updateMobileDialogHeight);
      viewport?.removeEventListener("scroll", updateMobileDialogHeight);
    };
  }, [isDialogOpen]);

  useEffect(() => {
    if (!isDialogOpen) {
      return;
    }

    const scrollFocusedFieldIntoView = (target?: HTMLElement | null) => {
      const contentElement = contentRef.current;
      const fieldTarget = target ?? document.activeElement;

      if (!contentElement || !isFocusableField(fieldTarget)) {
        return;
      }

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          fieldTarget.scrollIntoView({
            block: "center",
            inline: "nearest",
            behavior: "smooth",
          });
        });
      });
    };

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      scrollFocusedFieldIntoView(target);
    };

    const dialogElement = dialogRef.current;
    const viewport = window.visualViewport;
    dialogElement?.addEventListener("focusin", handleFocusIn);

    const handleViewportShift = () => {
      const activeElement = document.activeElement;
      scrollFocusedFieldIntoView(
        activeElement instanceof HTMLElement ? activeElement : null,
      );
    };

    viewport?.addEventListener("resize", handleViewportShift);
    viewport?.addEventListener("scroll", handleViewportShift);

    return () => {
      dialogElement?.removeEventListener("focusin", handleFocusIn);
      viewport?.removeEventListener("resize", handleViewportShift);
      viewport?.removeEventListener("scroll", handleViewportShift);
    };
  }, [isDialogOpen, currentStep]);

  const handleFieldChange = (name: BriefingFormField, value: string) => {
    setFormValues((current) => ({
      ...current,
      [name]: name === "whatsapp" ? formatWhatsapp(value) : value,
      ...(name === "bodyArea" && value !== "Outro"
        ? { bodyAreaOther: "" }
        : {}),
    }));
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setShowStepErrors(false);
  };

  const handleNextStep = () => {
    if (Object.keys(currentErrors).length > 0) {
      setShowStepErrors(true);
      return;
    }

    setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
    setShowStepErrors(false);
  };

  const handlePreviousStep = () => {
    setCurrentStep((step) => Math.max(step - 1, 0));
    setShowStepErrors(false);
  };

  const handleStepSelect = (targetStep: number) => {
    if (targetStep === currentStep) {
      return;
    }

    if (targetStep < currentStep) {
      setCurrentStep(targetStep);
      setShowStepErrors(false);
      return;
    }

    const firstInvalidStep = findFirstInvalidStep(formValues, targetStep - 1);

    if (firstInvalidStep !== -1) {
      setCurrentStep(firstInvalidStep);
      setShowStepErrors(true);
      return;
    }

    setCurrentStep(targetStep);
    setShowStepErrors(false);
  };

  const handleSubmit = () => {
    const firstInvalidStep = findFirstInvalidStep(formValues);

    if (firstInvalidStep !== -1) {
      setCurrentStep(firstInvalidStep);
      setShowStepErrors(true);
      return;
    }

    const whatsappHref = createWhatsAppHref(buildWhatsAppMessage(formValues));
    const popup = window.open(whatsappHref, "_blank", "noopener,noreferrer");

    setIsDialogOpen(false);
    setCurrentStep(0);
    setShowStepErrors(false);
    setFormValues({ ...initialFormValues });

    if (!popup) {
      window.location.assign(whatsappHref);
    }
  };

  return (
    <section
      id="contato"
      className="section-frame overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="relative mx-auto max-w-6xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 bg-[#EF0020]/28 blur-[34px] sm:-inset-5 lg:-inset-6"
        />

        <div className="relative overflow-hidden border border-[#EF0020]/30 bg-[#040404] shadow-[0_0_55px_rgba(239,0,32,0.12)]">
          <div className="absolute left-0 top-0 h-2 w-36 bg-[#EF0020] shadow-[0_0_26px_rgba(239,0,32,0.9)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,0,32,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(239,0,32,0.1),transparent_26%)]" />

          <div className="relative  gap-10 p-6 sm:p-8 lg:p-12">
            <div className="space-y-8">
              <div>
                <p className="section-kicker text-[#ff8797]">
                  CONTATO E BRIEFING
                </p>
                <h2 className="font-display mt-4 text-[2.5rem] leading-none tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Um primeiro contato mais claro, direto e bem guiado.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
                  Antes de falar no WhatsApp, você pode iniciar um briefing
                  rápido e bem estruturado. Assim a conversa já começa com
                  contexto, referências e expectativa mais alinhada para o seu
                  projeto.
                </p>
              </div>

              <div className="grid gap-px bg-white/10">
                <div className="bg-black/92 px-5 py-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ff8797]">
                    como funciona
                  </p>
                  <div className="mt-4 grid gap-3">
                    {processItems.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 border border-white/8 bg-white/[0.02] px-4 py-4"
                      >
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center border border-[#EF0020]/45 bg-[#EF0020]/10 text-[0.68rem] font-semibold tracking-[0.18em] text-[#ffb0b8]">
                          0{index + 1}
                        </span>
                        <p className="text-sm leading-7 text-white/64">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black/92 px-5 py-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ff8797]">
                    escolha como prefere seguir
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/62">
                    Se preferir, você pode falar direto comigo agora. Se quiser
                    um atendimento mais preciso desde a primeira troca, inicie o
                    briefing em etapas.
                  </p>
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={defaultWhatsAppHref}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-button brutal-button-secondary sm:flex-1"
                    >
                      FALAR NO WHATSAPP
                    </a>
                    <button
                      type="button"
                      onClick={handleOpenDialog}
                      className="brutal-button brutal-button-primary sm:flex-1"
                    >
                      INICIAR BRIEFING
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isDialogOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/88 backdrop-blur-md"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              handleCloseDialog();
            }
          }}
        >
          <div className="flex h-full items-end justify-center sm:items-center sm:px-6 sm:py-8">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="briefing-dialog-title"
              ref={dialogRef}
              style={dialogStyle}
              className="relative flex h-[var(--dialog-mobile-height,100dvh)] w-full max-w-6xl flex-col overflow-hidden border border-white/10 bg-[#050505] shadow-[0_0_60px_rgba(0,0,0,0.55)] sm:h-auto sm:max-h-[92dvh] sm:rounded-[1.6rem]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,0,32,0.18),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(239,0,32,0.12),transparent_24%)]" />

              <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                <div className="min-w-0">
                  <h3
                    id="briefing-dialog-title"
                    className={`font-display leading-none tracking-[-0.05em] text-white sm:text-3xl ${
                      isMobileKeyboardOpen ? "text-xl" : "text-2xl"
                    }`}
                  >
                    {!isMobileKeyboardOpen ? (
                      <span className="mb-2 block text-[0.68rem] uppercase tracking-[0.3em] text-[#ff8797]">
                        briefing guiado
                      </span>
                    ) : null}
                    {currentStepData.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleCloseDialog}
                  className="ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center border border-white/12 bg-black/50 text-sm tracking-[0.18em] text-white/68 transition hover:border-[#EF0020] hover:text-white"
                  aria-label="Fechar briefing"
                >
                  X
                </button>
              </div>

              <div className="relative flex min-h-0 flex-1 flex-col lg:grid lg:grid-cols-[0.84fr_1.16fr]">
                <div
                  className={`border-b border-white/10 bg-black/45 px-5 py-4 sm:px-7 lg:hidden ${
                    isMobileKeyboardOpen ? "hidden" : "block"
                  }`}
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/42">
                          progresso
                        </p>
                        <p className="text-sm text-white/58">
                          {currentStep + 1}/{steps.length}
                        </p>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden bg-white/8">
                        <div
                          className="h-full bg-[linear-gradient(90deg,#EF0020_0%,#ff7a8a_100%)] transition-[width] duration-300"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    <label className="block space-y-3">
                      <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ff8797]">
                        etapa atual
                      </span>
                      <select
                        value={String(currentStep)}
                        onChange={(event) =>
                          handleStepSelect(Number(event.target.value))
                        }
                        className={`${inputClassName} appearance-none pr-12`}
                      >
                        {steps.map((step, index) => (
                          <option key={step.label} value={index}>
                            {`0${index + 1} - ${step.label}`}
                          </option>
                        ))}
                      </select>
                    </label>

                    <div className="hidden lg:block space-y-3 border border-white/8 bg-white/[0.02] p-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ff8797]">
                        nesta etapa
                      </p>
                      <p className="text-sm leading-7 text-white/64">
                        {currentStepData.description}
                      </p>
                    </div>
                  </div>
                </div>

                <aside className="dialog-scrollbar hidden border-b border-white/10 bg-black/45 p-5 sm:p-7 lg:block lg:min-h-0 lg:overflow-y-auto lg:border-b-0 lg:border-r">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/42">
                          progresso
                        </p>
                        <p className="text-sm text-white/58">
                          {currentStep + 1}/{steps.length}
                        </p>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden bg-white/8">
                        <div
                          className="h-full bg-[linear-gradient(90deg,#EF0020_0%,#ff7a8a_100%)] transition-[width] duration-300"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {steps.map((step, index) => {
                        const isCurrent = index === currentStep;
                        const isCompleted = index < currentStep;

                        return (
                          <div
                            key={step.label}
                            className={`border px-4 py-4 transition ${
                              isCurrent
                                ? "border-[#EF0020]/45 bg-[linear-gradient(180deg,rgba(239,0,32,0.16),rgba(239,0,32,0.04))]"
                                : isCompleted
                                  ? "border-white/12 bg-white/[0.04]"
                                  : "border-white/8 bg-black/35"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center border text-[0.68rem] tracking-[0.18em] ${
                                  isCurrent
                                    ? "border-[#EF0020]/45 bg-[#EF0020]/12 text-[#ffb0b8]"
                                    : isCompleted
                                      ? "border-white/16 bg-white/[0.06] text-white/82"
                                      : "border-white/10 text-white/42"
                                }`}
                              >
                                0{index + 1}
                              </span>
                              <p
                                className={`text-sm uppercase tracking-[0.18em] ${
                                  isCurrent
                                    ? "text-white"
                                    : isCompleted
                                      ? "text-white/78"
                                      : "text-white/42"
                                }`}
                              >
                                {step.label}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="space-y-3 border border-white/8 bg-white/[0.02] p-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#ff8797]">
                        nesta etapa
                      </p>
                      <p className="text-sm leading-7 text-white/64">
                        {currentStepData.description}
                      </p>
                    </div>

                    <div className="space-y-3 border border-white/8 bg-white/[0.02] p-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
                        lembrando
                      </p>
                      <p className="text-sm leading-7 text-white/58">
                        Você pode fechar este fluxo a qualquer momento e retomar
                        depois do ponto em que parou.
                      </p>
                    </div>
                  </div>
                </aside>

                <div
                  ref={contentRef}
                  className="dialog-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 pb-10 sm:px-7 sm:py-7"
                >
                  {currentStep === 0 ? (
                    <div className="space-y-6">
                      <div className="space-y-3">
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
                          value={formValues.fullName}
                          onChange={(event) =>
                            handleFieldChange("fullName", event.target.value)
                          }
                          className={inputClassName}
                          placeholder="Seu nome"
                        />
                        <FieldError
                          message={
                            showStepErrors ? currentErrors.fullName : undefined
                          }
                        />
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
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
                            inputMode="numeric"
                            value={formValues.whatsapp}
                            onChange={(event) =>
                              handleFieldChange("whatsapp", event.target.value)
                            }
                            className={inputClassName}
                            placeholder="(00) 00000-0000"
                          />
                          <FieldError
                            message={
                              showStepErrors
                                ? currentErrors.whatsapp
                                : undefined
                            }
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
                            value={formValues.email}
                            onChange={(event) =>
                              handleFieldChange("email", event.target.value)
                            }
                            className={inputClassName}
                            placeholder="voce@email.com"
                          />
                          <FieldError
                            message={
                              showStepErrors ? currentErrors.email : undefined
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {currentStep === 1 ? (
                    <div className="space-y-6">
                      <ChoiceFieldset
                        legend="Você já tem tatuagens?"
                        name="experience"
                        options={experienceOptions}
                        value={formValues.experience}
                        onChange={handleFieldChange}
                        error={
                          showStepErrors ? currentErrors.experience : undefined
                        }
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
                          rows={7}
                          value={formValues.idea}
                          onChange={(event) =>
                            handleFieldChange("idea", event.target.value)
                          }
                          className={`${inputClassName} min-h-[11rem] resize-y`}
                          placeholder="Explique conceito, referências, significado, tamanho aproximado e tudo o que puder compartilhar."
                        />
                        <FieldError
                          message={
                            showStepErrors ? currentErrors.idea : undefined
                          }
                        />
                      </div>

                      <div className="space-y-4">
                        <ChoiceFieldset
                          legend="Onde pretende tatuar?"
                          name="bodyArea"
                          options={bodyAreaOptions}
                          value={formValues.bodyArea}
                          onChange={handleFieldChange}
                          columns="md:grid-cols-3"
                          error={
                            showStepErrors ? currentErrors.bodyArea : undefined
                          }
                        />

                        {formValues.bodyArea === "Outro" ? (
                          <div className="space-y-3">
                            <label
                              htmlFor="bodyAreaOther"
                              className="text-[0.72rem] uppercase tracking-[0.3em] text-white/46"
                            >
                              Qual área do corpo?
                            </label>
                            <input
                              id="bodyAreaOther"
                              name="bodyAreaOther"
                              type="text"
                              value={formValues.bodyAreaOther}
                              onChange={(event) =>
                                handleFieldChange(
                                  "bodyAreaOther",
                                  event.target.value,
                                )
                              }
                              className={inputClassName}
                              placeholder="Descreva a região desejada"
                            />
                            <FieldError
                              message={
                                showStepErrors
                                  ? currentErrors.bodyAreaOther
                                  : undefined
                              }
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : null}

                  {currentStep === 2 ? (
                    <div className="space-y-6">
                      <ChoiceFieldset
                        legend="Quando você pretende fazer sua tatuagem?"
                        name="timeline"
                        options={timelineOptions}
                        value={formValues.timeline}
                        onChange={handleFieldChange}
                        columns="md:grid-cols-2"
                        error={
                          showStepErrors ? currentErrors.timeline : undefined
                        }
                      />

                      <ChoiceFieldset
                        legend="Você já tem um investimento em mente?"
                        name="budget"
                        options={budgetOptions}
                        value={formValues.budget}
                        onChange={handleFieldChange}
                        columns="md:grid-cols-2"
                        error={
                          showStepErrors ? currentErrors.budget : undefined
                        }
                      />

                      <div className="border border-white/8 bg-white/[0.02] p-4">
                        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
                          orientação
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/60">
                          Não precisa acertar o valor exato agora. Essa resposta
                          só ajuda a dimensionar melhor a proposta e o caminho
                          mais coerente para o projeto.
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {currentStep === 3 ? (
                    <div className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <SummaryItem
                          label="Nome"
                          value={formValues.fullName.trim()}
                        />
                        <SummaryItem
                          label="WhatsApp"
                          value={formValues.whatsapp.trim()}
                        />
                        <SummaryItem
                          label="E-mail"
                          value={formValues.email.trim()}
                        />
                        <SummaryItem
                          label="Experiência"
                          value={formValues.experience}
                        />
                        <SummaryItem
                          label="Local do corpo"
                          value={resolvedBodyArea || "Não informado"}
                        />
                        <SummaryItem
                          label="Prazo"
                          value={formValues.timeline}
                        />
                        <SummaryItem
                          label="Investimento"
                          value={formValues.budget}
                        />
                      </div>

                      <div className="space-y-2 border border-white/8 bg-black/45 p-4">
                        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
                          Ideia do projeto
                        </p>
                        <p className="text-sm leading-7 text-white/72">
                          {formValues.idea.trim()}
                        </p>
                      </div>

                      <fieldset className="space-y-3">
                        <legend className="text-[0.72rem] uppercase tracking-[0.3em] text-white/46">
                          Confirmação final
                        </legend>
                        <label className="block cursor-pointer">
                          <input
                            type="checkbox"
                            name="commitment"
                            checked={formValues.commitment}
                            onChange={(event) =>
                              setFormValues((current) => ({
                                ...current,
                                commitment: event.target.checked,
                              }))
                            }
                            className="peer sr-only"
                          />
                          <span className={choiceClassName}>
                            Estou ciente de que se trata de um projeto
                            personalizado, sujeito a análise prévia e
                            disponibilidade de agenda.
                          </span>
                        </label>
                        <FieldError
                          message={
                            showStepErrors
                              ? currentErrors.commitment
                              : undefined
                          }
                        />
                      </fieldset>
                    </div>
                  ) : null}
                </div>
              </div>

              <div
                className={`relative border-t border-white/10 bg-black/60 px-5 py-4 sm:px-7 ${
                  isMobileKeyboardOpen ? "hidden lg:block" : ""
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm leading-6 text-white/50">
                    {currentStep === steps.length - 1
                      ? "Ao enviar, o WhatsApp abre com seu briefing montado."
                      : "Você pode avançar no seu ritmo e revisar tudo antes de enviar."}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {currentStep > 0 ? (
                      <button
                        type="button"
                        onClick={handlePreviousStep}
                        className="brutal-button brutal-button-ghost"
                      >
                        VOLTAR
                      </button>
                    ) : null}

                    {currentStep < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="brutal-button brutal-button-primary"
                      >
                        CONTINUAR
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="brutal-button brutal-button-primary"
                      >
                        ABRIR WHATSAPP COM O BRIEFING
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

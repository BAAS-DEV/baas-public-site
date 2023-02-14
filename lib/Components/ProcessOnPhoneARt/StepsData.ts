interface Data {
  step: string;
  description: string;
  deliveries: string[];
  image: string;
}

export default function StepsData(): Data[] {
  let data: Data[] = [
    {
      step: "Project planning & Brainstorming",
      description:
        "Defining project scope, goals, and resources. Identifying user needs and generating ideas.",
      deliveries: [
        "Project Charter",
        "Technical Charter",
        "Business Focused Project Documentation",
      ],
      image:
        "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/eb64e5d1-8268-4b73-a3e3-65103eb6a800/public",
    },
    {
      step: "Development Cycle(s)",
      description:
        "Building and testing the software through iterative cycles including design, coding, testing, and debugging.",
      deliveries: [
        "Milestone Reports",
        "Review Session Documentation",
        "Documentation of Requirement Changes",
      ],
      image:
        "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/60b9aec6-dc13-4888-34c8-34993ab44800/public",
    },
    {
      step: "Hand-Off",
      description:
        "Transferring ownership or responsibility for the software to the client or end users. Completing necessary documentation, training, and testing.",
      deliveries: [
        "Mass User Onboarding",
        "Training Manuals",
        "Support Documentation",
      ],
      image:
        "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/16f10bd8-784a-4778-3a10-330fd1b07e00/public",
    },
    {
      step: "Post Deploy Support",
      description:
        "Providing ongoing support and maintenance for the software after deployment. Troubleshooting, implementing updates, and providing user support.",
      deliveries: [
        "Automated Alerts & Reports",
        "24/7 Chat",
        "24/7 Support Ticketing",
      ],
      image:
        "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/c5016ff4-78e9-4dcc-6619-dc7f14c21500/public",
    },
  ];
  return data;
}

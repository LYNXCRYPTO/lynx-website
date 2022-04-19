export const Services: ServicesData = {
  data: [
    {
      service: "UI/UX Design",
      hex: "#0656EA",
    },
    {
      service: "Search Engine Optimization",
      hex: "#377BFA",
    },
    {
      service: "Server Side Rendered Site",
      hex: "#5B78F5",
    },
    {
      service: "Website Performance Improvement",
      hex: "#8174EF",
    },
    {
      service: "Functional Database",
      hex: "#A371EA",
    },
    {
      service: "Appointment Schedulers",
      hex: "#D56DE3",
    },
    {
      service: "Blog Integration",
      hex: "#E96DCC",
    },
    {
      service: "Email Servers",
      hex: "#FF6EB2",
    },
    {
      service: "Mobile Apps",
      hex: "#FF7883",
    },
    {
      service: "Digital Payment Integration",
      hex: "#FF805B",
    },
    {
      service: "Custom Logo Design",
      hex: "#FF8A2E",
    },
    {
      service: "Backend Architecture",
      hex: "#FF9301",
    },
  ],
};

export interface ServicesData {
  data: ServicesContent[];
}

export interface ServicesContent {
  service: string;
  hex: string;
}

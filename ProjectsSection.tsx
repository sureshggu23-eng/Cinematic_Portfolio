import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "AI-BASED SUSPICIOUS ACTIVITY DETECTION",
    category: "ARTIFICIAL INTELLIGENCE • COMPUTER VISION",
    description:
      "A real-time AI surveillance system designed to identify suspicious activities and fall events using computer vision and pose estimation.",
    technologies: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "Computer Vision",
    ],
    status: "AI / COMPUTER VISION",
    github: "https://github.com/sureshggu23-eng",
  },

  {
    number: "02",
    title: "ORGANO CONNECT",
    category: "WEB DEVELOPMENT • E-COMMERCE",
    description:
      "An organic marketplace concept connecting farmers and customers for traditional organic products, nutritional items and snacks.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
    ],
    status: "WEB PROJECT",
    github:
      "https://github.com/sureshggu23-eng/Organo_Project",
  },

  {
    number: "03",
    title: "WILD ANIMAL DETECTION",
    category: "MACHINE LEARNING • OBJECT DETECTION",
    description:
      "A computer vision project that detects and identifies wild animals from images or video using object detection techniques.",
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "Machine Learning",
    ],
    status: "MACHINE LEARNING",
    github: "https://github.com/sureshggu23-eng",
  },

  {
    number: "04",
    title: "DATA ANALYTICS & VISUALIZATION",
    category: "DATA SCIENCE • ANALYTICS",
    description:
      "A data analytics project focused on processing datasets, extracting useful information and presenting insights through meaningful visualizations.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    status: "DATA ANALYTICS",
    github: "https://github.com/sureshggu23-eng",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        px-6
        py-24
        text-white
        sm:px-10
        lg:px-16
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/4
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/5
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-20
          bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-16"
        >

          <p
            className="
              mb-4
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-blue-400
            "
          >
            02 — SELECTED WORK
          </p>

          <div
            className="
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >

            <h2
              className="
                text-5xl
                font-bold
                uppercase
                leading-none
                tracking-tight
                sm:text-6xl
                md:text-7xl
              "
            >
              PROJECTS
            </h2>

            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-gray-400
              "
            >
              A selection of projects where I apply
              Python, computer vision, machine learning
              and data analytics to practical problems.
            </p>

          </div>

        </motion.div>


        {/* =====================================================
            PROJECT CARDS
        ====================================================== */}

        <div className="space-y-6">

          {projects.map((project, index) => (

            <motion.article
              key={project.number}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="
                group
                relative
                overflow-hidden
                border
                border-white/10
                bg-white/[0.02]
                transition-all
                duration-500
                hover:border-blue-500/50
                hover:bg-white/[0.04]
              "
            >

              {/* Blue hover line */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-0.5
                  origin-top
                  scale-y-0
                  bg-blue-500
                  transition-transform
                  duration-500
                  group-hover:scale-y-100
                "
              />


              <div
                className="
                  grid
                  gap-8
                  p-7
                  md:grid-cols-[90px_1fr_220px]
                  md:items-center
                  md:p-10
                "
              >

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div className="flex items-start">

                  <span
                    className="
                      text-4xl
                      font-light
                      text-gray-700
                      transition-colors
                      duration-500
                      group-hover:text-blue-500
                    "
                  >
                    {project.number}
                  </span>

                </div>


                {/* =================================================
                    PROJECT INFORMATION
                ================================================== */}

                <div>

                  <p
                    className="
                      mb-3
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-blue-400
                    "
                  >
                    {project.category}
                  </p>


                  <h3
                    className="
                      mb-5
                      max-w-3xl
                      text-2xl
                      font-semibold
                      uppercase
                      leading-tight
                      tracking-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-blue-100
                      sm:text-3xl
                    "
                  >
                    {project.title}
                  </h3>


                  <p
                    className="
                      max-w-3xl
                      text-sm
                      leading-7
                      text-gray-400
                    "
                  >
                    {project.description}
                  </p>


                  {/* Technologies */}

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    {project.technologies.map(
                      (technology) => (

                        <span
                          key={technology}
                          className="
                            border
                            border-white/10
                            px-3
                            py-1.5
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-gray-400
                            transition-colors
                            duration-300
                            group-hover:border-blue-500/20
                            group-hover:text-gray-300
                          "
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>


                {/* =================================================
                    RIGHT SIDE
                ================================================== */}

                <div
                  className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    border-t
                    border-white/10
                    pt-6
                    md:flex-col
                    md:items-end
                    md:justify-center
                    md:border-l
                    md:border-t-0
                    md:pl-8
                    md:pt-0
                  "
                >

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-gray-500
                    "
                  >
                    {project.status}
                  </span>


                  {/* =================================================
                      VIEW PROJECT BUTTON
                  ================================================== */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="
                      mt-0
                      flex
                      h-12
                      items-center
                      gap-3
                      border
                      border-gray-700
                      px-4
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-gray-300
                      transition-all
                      duration-300
                      hover:border-blue-500
                      hover:bg-blue-500
                      hover:text-white
                      md:mt-8
                    "
                  >

                    <span>
                      VIEW PROJECT
                    </span>

                    <span className="text-lg">
                      ↗
                    </span>

                  </a>

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* =====================================================
            GITHUB PROFILE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-12
            flex
            flex-col
            items-start
            justify-between
            gap-5
            border-t
            border-white/10
            pt-6
            sm:flex-row
            sm:items-center
          "
        >

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-gray-600
            "
          >
            MORE PROJECTS COMING SOON
          </p>


          <a
            href="https://github.com/sureshggu23-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-gray-400
              transition-colors
              duration-300
              hover:text-blue-400
            "
          >

            <span>
              VISIT MY GITHUB
            </span>

            <span className="text-base">
              ↗
            </span>

          </a>

        </motion.div>


        {/* =====================================================
            PROJECT COUNT
        ====================================================== */}

        <div
          className="
            mt-6
            text-right
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-gray-600
          "
        >
          04 PROJECTS
        </div>

      </div>

    </section>
  );
};

export default ProjectsSection;
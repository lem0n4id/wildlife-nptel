import { Question } from "@/types/Question";

export const questionsByModule: { [week: string]: Question[] } = {
  module1: [
    {
      question: "Which of the following tasks is NOT a typical function of an embedded system, according to the provided sources?",
      options: [
        "Data collection, storage, and representation.",
        "Data communication.",
        "Data (signal) processing.",
        "General purpose web browsing."
      ],
      answer: "General purpose web browsing."
    },
    {
      question: "What is a key characteristic that distinguishes an embedded system from a general-purpose computing system?",
      options: [
        "Embedded systems always run faster than general-purpose systems.",
        "Embedded systems are designed for specific tasks, while general-purpose systems are more versatile.",
        "Embedded systems always use complex operating systems, while general-purpose systems often do not.",
        "Embedded systems are primarily software-based, while general-purpose systems rely heavily on hardware."
      ],
      answer: "Embedded systems are designed for specific tasks, while general-purpose systems are more versatile."
    },
    {
      question: "Which generation of embedded systems saw the introduction of Digital Signal Processors (DSPs) and Application-Specific Integrated Circuits (ASICs)?",
      options: [
        "First Generation",
        "Second Generation",
        "Third Generation",
        "Fourth Generation"
      ],
      answer: "Third Generation"
    },
    {
      question: "According to the classification based on complexity and performance, which type of embedded system is characterized by high memory requirements, the use of multi-core processors, and potentially the use of a Real-Time Operating System (RTOS)?",
      options: [
        "Small Scale Systems",
        "Medium Scale Systems",
        "Large Scale Systems",
        "All of the above"
      ],
      answer: "Large Scale Systems"
    },
    {
      question: "Based on their functional requirements, embedded systems can be categorized into different types. Which type of embedded system is designed to operate independently without relying on an external network or system?",
      options: [
        "Real-Time Systems",
        "Stand-Alone Systems",
        "Networked Systems",
        "Mobile Systems"
      ],
      answer: "Stand-Alone Systems"
    },
    {
      question: "Embedded systems can be classified as either real-time or non-real-time based on their execution behavior. What is the primary distinction between these two types?",
      options: [
        "Real-time systems prioritize user interface design, while non-real-time systems focus on efficient data processing.",
        "Real-time systems are always connected to a network, while non-real-time systems operate independently.",
        "Real-time systems must meet deadlines without compromising safety or performance, while non-real-time systems have more flexible timing requirements.",
        "Real-time systems are limited to small-scale applications, while non-real-time systems can handle complex, large-scale tasks."
      ],
      answer: "Real-time systems must meet deadlines without compromising safety or performance, while non-real-time systems have more flexible timing requirements."
    },
    {
      question: "How do event-triggered embedded systems differ from time-triggered systems in their operation?",
      options: [
        "Event-triggered systems operate based on pre-defined schedules, while time-triggered systems react to specific events.",
        "Event-triggered systems require constant monitoring for events, while time-triggered systems execute tasks at predetermined times.",
        "Event-triggered systems are used in safety-critical applications, while time-triggered systems are suitable for less critical tasks.",
        "Event-triggered systems are more complex and resource-intensive than time-triggered systems."
      ],
      answer: "Event-triggered systems require constant monitoring for events, while time-triggered systems execute tasks at predetermined times."
    },
    {
      question: "During the Embedded Product Development Life Cycle (EDLC), what is the key objective of the Planning and Analysis stage?",
      options: [
        "Creating a detailed hardware design and selecting components.",
        "Writing the software code and debugging the system.",
        "Testing the product and preparing it for mass production.",
        "Defining the product concept, target audience, requirements, and analyzing competitors."
      ],
      answer: "Defining the product concept, target audience, requirements, and analyzing competitors."
    },
    {
      question: "In the Designing stage of the EDLC, assembling a skilled development team is crucial. Which engineer plays a vital role in designing the physical structure and enclosure of the embedded product?",
      options: [
        "Embedded software engineer",
        "Hardware engineer",
        "Mechanical engineer",
        "PCB layout engineer"
      ],
      answer: "Mechanical engineer"
    },
    {
      question: "Which of the following is NOT a common challenge faced during the development of embedded systems?",
      options: [
        "Limited memory and processing power.",
        "Power consumption constraints, especially in battery-powered devices.",
        "Ensuring the security of connected embedded systems.",
        "The abundance of readily available development tools specifically designed for embedded systems."
      ],
      answer: "The abundance of readily available development tools specifically designed for embedded systems."
    },
    {
      question: "Security concerns are becoming increasingly significant in embedded systems, especially those connected to the Internet of Things (IoT). Which aspect of embedded system development is particularly vulnerable to security breaches and requires careful attention?",
      options: [
        "The physical design of the hardware",
        "Network connectivity and communication protocols",
        "User interface design and implementation",
        "The choice of programming language"
      ],
      answer: "Network connectivity and communication protocols"
    },
    {
      question: "In the context of embedded systems, fault tolerance is a critical design consideration. What does fault tolerance mean in this context?",
      options: [
        "The system's ability to operate with minimal power consumption",
        "The system's capacity to function correctly despite hardware or software errors",
        "The ease with which the system can be integrated with existing infrastructure",
        "The system's adherence to strict real-time deadlines"
      ],
      answer: "The system's capacity to function correctly despite hardware or software errors"
    },
    {
      question: "What is the main purpose of benchmarking in the context of embedded systems?",
      options: [
        "To measure the aesthetic appeal of a product's design",
        "To evaluate the user-friendliness of the system's interface",
        "To compare the performance and efficiency of different systems",
        "To determine the market demand for a particular embedded product"
      ],
      answer: "To compare the performance and efficiency of different systems"
    },
    {
      question: "MIPS (Million Instructions Per Second) was an early metric for processor performance. What was a significant limitation of using MIPS as a performance indicator?",
      options: [
        "MIPS only measured the speed of memory access, not processing power.",
        "MIPS was not applicable to embedded systems; it was only relevant for general-purpose computers.",
        "MIPS failed to account for architectural differences between processors, making comparisons inaccurate.",
        "MIPS could only be measured on systems running the Linux operating system."
      ],
      answer: "MIPS failed to account for architectural differences between processors, making comparisons inaccurate."
    },
    {
      question: "The Dhrystone benchmark, unlike MIPS, focuses on program iteration completions per second. What advantage does this approach offer in assessing processor performance?",
      options: [
        "It accurately measures the system's power consumption during benchmark execution.",
        "It enables more meaningful comparisons between processors with different instruction sets (RISC vs. CISC).",
        "It evaluates the system's responsiveness to user input and overall user experience.",
        "It focuses on the security aspects of the embedded system, identifying potential vulnerabilities."
      ],
      answer: "It enables more meaningful comparisons between processors with different instruction sets (RISC vs. CISC)."
    },
    {
      question: "EEMBC (EDN Embedded Microprocessor Benchmark Consortium) offers a suite of benchmarks categorized by application area and performance focus. What is the primary focus of EEMBC's \"Single-core Processor Performance\" benchmarks?",
      options: [
        "Analyzing the efficiency of power management in low-power embedded systems.",
        "Assessing the performance of processors in tasks like audio processing, automotive control, and networking.",
        "Measuring the speed and responsiveness of the system's user interface.",
        "Evaluating the system's ability to handle complex artificial intelligence algorithms."
      ],
      answer: "Assessing the performance of processors in tasks like audio processing, automotive control, and networking."
    },
    {
      question: "EEMBC's \"Ultra-Low Power (ULP) and Internet of Things\" benchmarks are specifically designed for what type of embedded systems?",
      options: [
        "Systems designed for high-performance computing, such as those used in gaming consoles.",
        "Systems with limited power budgets, typically battery-powered devices used in IoT applications.",
        "Systems primarily focused on data storage and retrieval, like those found in network servers.",
        "Systems used in industrial automation and control, requiring real-time responses and high reliability."
      ],
      answer: "Systems with limited power budgets, typically battery-powered devices used in IoT applications."
    },
    {
      question: "EEMBC's \"Heterogeneous Compute\" benchmarks cater to modern embedded platforms that often combine different processing units. What types of processing units are typically found in these heterogeneous computing platforms?",
      options: [
        "CPUs, GPUs, and DSPs",
        "Hard drives, SSDs, and optical drives",
        "Keyboards, mice, and touchscreens",
        "Sensors, actuators, and communication modules"
      ],
      answer: "CPUs, GPUs, and DSPs"
    },
    {
      question: "What is the primary purpose of the \"Product Re-engineering\" need, as outlined in the Embedded Product Development Life Cycle (EDLC)?",
      options: [
        "To develop a completely new and innovative product that doesn't exist in the market.",
        "To enhance an existing product with new features or functionalities.",
        "To maintain an existing product by fixing bugs and providing technical support.",
        "To expand the market reach of an existing product by targeting new customer segments."
      ],
      answer: "To enhance an existing product with new features or functionalities."
    },
    {
      question: "Which software component in the Automatic Chocolate Vending Machine (ACVM) example is responsible for handling the actions based on the amount of coins collected?",
      options: [
        "Task_ReadPorts",
        "Task_Collect",
        "Task_Deliver",
        "Task_Refund"
      ],
      answer: "Task_Collect"
    }
  ],
  module2: [
    {
      question: "What is the biggest advantage of General Purpose Processors (GPP)?",
      options: ["High Performance", "Low Power Consumption", "Flexibility", "Small Size"],
      answer: "Flexibility",
    },
    {
      question: "Which type of Application Specific Processor (ASP) is entirely implemented in hardware?",
      options: ["Digital Signal Processor (DSP)", "Application Specific Instruction Set Processor (ASIP)", "Application Specific Integrated Circuit (ASIC)", "Microcontroller"],
      answer: "Application Specific Integrated Circuit (ASIC)",
    },
    {
      question: "Which of the following is NOT a feature of DSP architecture?",
      options: ["Memory architecture designed for streaming data", "Inclusion of a Memory Management Unit (MMU)", "Bit-reversed addressing", "Separate program and data memories (Harvard architecture)"],
      answer: "Inclusion of a Memory Management Unit (MMU)",
    },
    {
      question: "What is the core characteristic of an ASIP?",
      options: ["Interfaces", "Micro-architecture", "Instruction Set", "All of the above"],
      answer: "Instruction Set",
    },
    {
      question: "Which type of ASIC is entirely customized for a particular application from the start?",
      options: ["Semi-custom", "Structured", "Gate-array", "Full-custom"],
      answer: "Full-custom",
    },
    {
      question: "What does SoC stand for?",
      options: ["System on Chip", "System of Circuits", "Signal on Chip", "System on Circuit"],
      answer: "System on Chip",
    },
    {
      question: "Which instruction set architecture allows single complex instructions to perform multiple low-level operations?",
      options: ["RISC", "CISC", "Both RISC and CISC", "Neither RISC nor CISC"],
      answer: "CISC",
    },
    {
      question: "Which of the following is a RISC processor?",
      options: ["Intel 'i' series", "Motorola 68K", "8051", "ARM"],
      answer: "ARM",
    },
    {
      question: "What is the primary goal of CISC architecture?",
      options: ["To execute instructions in a single clock cycle.", "To reduce the number of transistors required.", "To complete a task in as few lines of assembly as possible.", "To simplify instruction decoding."],
      answer: "To complete a task in as few lines of assembly as possible.",
    },
    {
      question: "What is one advantage of RISC over CISC?",
      options: ["Shorter code length", "Simpler compiler design", "Lower power consumption", "Easier to program"],
      answer: "Lower power consumption",
    },
    {
      question: "Which type of RAM retains its contents as long as power is applied?",
      options: ["DRAM", "SRAM", "Both DRAM and SRAM", "Neither DRAM nor SRAM"],
      answer: "SRAM",
    },
    {
      question: "What is the main disadvantage of DRAM compared to SRAM?",
      options: ["Higher cost per byte", "Lower density", "Slower access time", "More complex storage process"],
      answer: "Slower access time",
    },
    {
      question: "Which type of ROM can be programmed only once?",
      options: ["Masked ROM", "PROM", "EPROM", "EEPROM"],
      answer: "PROM",
    },
    {
      question: "What is the erasing mechanism used in EPROM?",
      options: ["Electrical charge", "Ultraviolet light", "Heat", "Magnetic field"],
      answer: "Ultraviolet light",
    },
    {
      question: "Which type of ROM can be erased and reprogrammed electrically, byte by byte?",
      options: ["EPROM", "EEPROM", "Flash", "PROM"],
      answer: "EEPROM",
    },
    {
      question: "What is the primary difference between EEPROM and Flash memory?",
      options: ["EEPROM is faster than Flash", "Flash erases data in sectors, while EEPROM erases byte by byte", "Flash is more expensive than EEPROM", "EEPROM has a higher density than Flash"],
      answer: "Flash erases data in sectors, while EEPROM erases byte by byte",
    },
    {
      question: "Which embedded memory type is most suitable for storing a large amount of firmware in a microcontroller?",
      options: ["SRAM", "DRAM", "EEPROM", "Flash"],
      answer: "Flash",
    },
    {
      question: "Which of the following is NOT a technical factor to consider when selecting memory for an embedded system?",
      options: ["Data capacity", "Vendor reputation", "Access time", "Power consumption"],
      answer: "Vendor reputation",
    },
    {
      question: "What type of processor is typically used in smartwatches?",
      options: ["8-bit microcontroller", "ARM Cortex-M series", "Multiprocessor with DSP", "Intel 'i' series"],
      answer: "ARM Cortex-M series",
    },
    {
      question: "What is a critical consideration when designing power supplies for battery-powered embedded systems?",
      options: ["High processing speed", "Large memory capacity", "Low power consumption", "Complex instruction set"],
      answer: "Low power consumption",
    },
  ],
  module3: [
    {
      question: "Which of the following is NOT a feature that Embedded C focuses on?",
      options: ["Processor independent", "Efficient memory management", "Complex data structures", "Code size constraints"],
      answer: "Complex data structures",
    },
    {
      question: "What is the primary function of a locator in the embedded software build process?",
      options: ["Combine multiple object files into a single executable.", "Translate assembly code into machine code.", "Assign physical memory addresses to code and data sections.", "Optimize the intermediate code for faster execution."],
      answer: "Assign physical memory addresses to code and data sections.",
    },
    {
      question: "What is the role of the \".bss\" segment in embedded software memory allocation?",
      options: ["Stores opcodes and literals.", "Holds initialized global variables and their initial values.", "Contains uninitialized global variables.", "Stores constants and read-only data."],
      answer: "Contains uninitialized global variables.",
    },
    {
      question: "According to the source, what is the correct order of the three main steps in the embedded software build process?",
      options: ["Relocatable program, Relocation, Object file", "Object file, Relocation, Relocatable program", "Relocation, Object file, Relocatable program", "Object file, Relocatable program, Relocation"],
      answer: "Object file, Relocatable program, Relocation",
    },
    {
      question: "Which of the following tools is NOT explicitly listed as required for the embedded software build process?",
      options: ["Cross-assemblers/compilers", "Emulator", "Linker", "Debugger"],
      answer: "Emulator",
    },
    {
      question: "What is the purpose of pre-processing in embedded C programming?",
      options: ["Compiling the source code into assembly language.", "Evaluating pre-processor directives before compilation.", "Assigning memory addresses to code and data.", "Linking multiple object files into a single executable."],
      answer: "Evaluating pre-processor directives before compilation.",
    },
    {
      question: "What is the difference between a native compiler and a cross-compiler?",
      options: ["A native compiler runs on a different platform than the target platform, while a cross-compiler runs on the same platform.", "A native compiler produces code for the same platform it runs on, while a cross-compiler produces code for a different platform.", "A native compiler is used for embedded systems development, while a cross-compiler is used for general-purpose computers.", "A native compiler is more efficient than a cross-compiler."],
      answer: "A native compiler produces code for the same platform it runs on, while a cross-compiler produces code for a different platform.",
    },
    {
      question: "Which phase of the compilation process involves checking for logical errors in the program, such as unused variables?",
      options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Optimization"],
      answer: "Semantic Analysis",
    },
    {
      question: "Which memory segment is typically allocated by the linker rather than the compiler?",
      options: [".data", ".text", ".stack", ".rodata"],
      answer: ".stack",
    },
    {
      question: "What is the output of an assembler in the embedded software build process?",
      options: ["Source code", "Assembly language code", "Object file", "Executable binary image"],
      answer: "Object file",
    },
    {
      question: "What is the main purpose of a linker in embedded software development?",
      options: ["Translate C code into assembly language.", "Combine multiple object files and resolve symbol references.", "Allocate memory for code and data sections.", "Convert a relocatable program into an executable binary image."],
      answer: "Combine multiple object files and resolve symbol references.",
    },
    {
      question: "What does the \"relocation\" process involve in embedded software linking?",
      options: ["Assigning physical memory addresses to code and data sections.", "Resolving references between object files using symbols.", "Adjusting addresses and patching code to reflect new memory locations.", "Creating a shadow data section to copy read-only data to RAM."],
      answer: "Adjusting addresses and patching code to reflect new memory locations.",
    },
    {
      question: "What is the typical role of a Linker Control File (LCF)?",
      options: ["Specify the target processor architecture.", "Define the memory layout and section placement for the executable.", "Control the optimization level of the compiler.", "Provide debugging information for the debugger."],
      answer: "Define the memory layout and section placement for the executable.",
    },
    {
      question: "What file format is commonly used to represent the intermediate output of the locating process?",
      options: [".bin", ".hex", ".ELF", ".txt"],
      answer: ".ELF",
    },
    {
      question: "What is the function of a runtime library in embedded software development?",
      options: ["Provide low-level support functions for the programming language.", "Define the hardware abstraction layer for the operating system.", "Automate the building and compilation of source code.", "Facilitate communication between the operating system and hardware devices."],
      answer: "Provide low-level support functions for the programming language.",
    },
    {
      question: "What is the primary advantage of using a makefile in embedded software development?",
      options: ["Simplifying the writing of complex C code.", "Debugging code directly on the target hardware.", "Automating the build process and reducing manual command entry.", "Creating virtual models of the embedded system for testing."],
      answer: "Automating the build process and reducing manual command entry.",
    },
    {
      question: "What is a key feature of GCC (GNU Compiler Collection) that makes it suitable for embedded development?",
      options: ["Its proprietary nature, providing exclusive tools for specific architectures.", "Its limited support for ARM architectures, focusing on x86 platforms.", "Its ability to perform cross-compilation, targeting different architectures.", "Its lack of optimization capabilities, resulting in larger and slower code."],
      answer: "Its ability to perform cross-compilation, targeting different architectures.",
    },
    {
      question: "What does the \"abi\" component of the ARM toolchain naming convention specify?",
      options: ["The target operating system.", "The Application Binary Interface used by the toolchain.", "The vendor of the toolchain.", "The target architecture."],
      answer: "The Application Binary Interface used by the toolchain.",
    },
    {
      question: "Which of the following is NOT a common function of a device driver in embedded systems?",
      options: ["Translate high-level OS commands into low-level hardware commands.", "Handle startup and shutdown of the hardware device.", "Manage memory allocation for the application software.", "Allow other software to acquire and release access to the hardware."],
      answer: "Manage memory allocation for the application software.",
    },
    {
      question: "What is a key advantage of using an in-circuit debugger (ICD) for embedded systems development?",
      options: ["It allows debugging of code without the need for physical hardware.", "It enables debugging of startup code and programs running from ROM.", "It provides real-time code execution and full peripheral implementation.", "It allows developers to examine and modify code running on the target hardware."],
      answer: "It allows developers to examine and modify code running on the target hardware.",
    },
  ],
  module4: [
    {
      question: "What is the main purpose of modeling in embedded systems (ES)?",
      options: ["To eliminate the need for physical prototypes.", "To generate code automatically.", "To create abstract representations of the system's hardware and software.", "To test the system's performance in real-time."],
      answer: "To create abstract representations of the system's hardware and software.",
    },
    {
      question: "According to the source, what is NOT a benefit of modeling embedded systems?",
      options: ["Visualization", "Reducing complexity", "Documentation", "Cost reduction"],
      answer: "Cost reduction",
    },
    {
      question: "When are modeling processes typically used in the development of embedded systems?",
      options: ["During hardware design and prototyping", "Before software implementation", "After system integration and testing", "Throughout the entire development lifecycle"],
      answer: "Before software implementation",
    },
    {
      question: "What is the primary function of a modeling language in embedded systems design?",
      options: ["To describe the system's physical layout and connections.", "To generate code for the target hardware platform.", "To explain the design and construction of the system model.", "To simulate the system's behavior in real-time."],
      answer: "To explain the design and construction of the system model.",
    },
    {
      question: "Which of the following is NOT a modeling technique specifically mentioned in the source?",
      options: ["Control Data Flow Graph (CDFG)", "Entity-Relationship Diagram (ERD)", "Petri Net", "Unified Modeling Language (UML)"],
      answer: "Entity-Relationship Diagram (ERD)",
    },
    {
      question: "What is the primary purpose of a UML use case diagram in embedded systems design?",
      options: ["To model the physical components and their connections.", "To represent the dynamic behavior of the system from a user's perspective.", "To detail the internal structure and methods of individual software classes.", "To depict the sequence of messages exchanged between objects."],
      answer: "To represent the dynamic behavior of the system from a user's perspective.",
    },
    {
      question: "In a UML use case diagram, what does an 'actor' represent?",
      options: ["A hardware component of the embedded system", "A software module or function", "A person or entity interacting with the system", "A specific action or task within the system"],
      answer: "A person or entity interacting with the system",
    },
    {
      question: "What type of UML diagram is best suited for visualizing the flow of control between different elements of an embedded system?",
      options: ["Class diagram", "Sequence diagram", "Component diagram", "Use case diagram"],
      answer: "Sequence diagram",
    },
    {
      question: "What does a lifeline represent in a UML sequence diagram?",
      options: ["The duration of an object's existence during the interaction.", "A message being sent from one object to another.", "A condition that must be met for a message to be sent.", "A point in time where the system's state changes."],
      answer: "The duration of an object's existence during the interaction.",
    },
    {
      question: "What is the key difference between 'aggregation' and 'composition' relationships in a UML class diagram?",
      options: ["Aggregation indicates a 'whole-part' relationship where the 'part' can exist independently, while composition implies the 'part' cannot exist without the 'whole.'", "Aggregation represents a one-to-many relationship, while composition indicates a one-to-one relationship.", "Aggregation is used for modeling hardware connections, while composition is for software relationships.", "Aggregation is a weaker relationship than composition."],
      answer: "Aggregation indicates a 'whole-part' relationship where the 'part' can exist independently, while composition implies the 'part' cannot exist without the 'whole.'",
    },
    {
      question: "What is the primary focus of a UML component diagram for an embedded system?",
      options: ["To show the internal structure of individual software modules.", "To illustrate the physical organization and connections of hardware components.", "To model the static implementation view of the system, highlighting components and their relationships.", "To represent the sequence of operations performed by the system."],
      answer: "To model the static implementation view of the system, highlighting components and their relationships.",
    },
    {
      question: "What is a 'port' in the context of a UML component diagram?",
      options: ["A physical connection point on a hardware component.", "An interface through which a component interacts with its environment.", "A data structure used for communication between components.", "A subcomponent that provides a specific functionality."],
      answer: "An interface through which a component interacts with its environment.",
    },
    {
      question: "Which of the following best describes the concept of 'firing a transition' in a Petri Net model?",
      options: ["Adding a token to a place in the Petri Net.", "Removing a token from a place in the Petri Net.", "The occurrence of an event that causes tokens to move between places.", "The creation of a new transition in the Petri Net."],
      answer: "The occurrence of an event that causes tokens to move between places.",
    },
    {
      question: "What do the 'places' in a Petri Net represent?",
      options: ["Actions or events in the system.", "Data values being processed.", "Conditions or states within the system.", "Transitions between states."],
      answer: "Conditions or states within the system.",
    },
    {
      question: "What is a key characteristic of a Finite State Machine (FSM)?",
      options: ["It can exist in multiple states simultaneously.", "It has an infinite number of possible states.", "It transitions between states based on inputs and a state transition function.", "It does not involve any actions or outputs."],
      answer: "It transitions between states based on inputs and a state transition function.",
    },
    {
      question: "Which type of state machine is specifically mentioned in the source as being relevant to embedded systems?",
      options: ["Turing machine", "Deterministic finite automaton", "UML state machine", "Pushdown automaton"],
      answer: "UML state machine",
    },
    {
      question: "What is the primary distinction between a Data Flow Graph (DFG) and a Control Data Flow Graph (CDFG)?",
      options: ["A DFG models data transformations, while a CDFG focuses on control flow and decision-making.", "A DFG is used for hardware modeling, while a CDFG is for software modeling.", "A DFG is a static model, while a CDFG is a dynamic model.", "A DFG is more complex and detailed than a CDFG."],
      answer: "A DFG models data transformations, while a CDFG focuses on control flow and decision-making.",
    },
    {
      question: "What does a diamond-shaped block represent in a CDFG?",
      options: ["A data operation", "A control operation or decision point", "An input data source", "An output data sink"],
      answer: "A control operation or decision point",
    },
    {
      question: "What real-world example is provided in the source to illustrate the application of a CDFG model in an embedded system?",
      options: ["A simple vending machine", "An ATM machine", "An elevator control system", "A digital still camera"],
      answer: "A digital still camera",
    },
    {
      question: "Which component in a digital still camera is responsible for converting the analog signal from the CCD sensor into a digital signal, as mentioned in the source?",
      options: ["Media processor", "Frame buffer", "Analog Front End", "User interface"],
      answer: "Analog Front End",
    },
  ],
  module5: [
    {
      question: "What is the maximum operating frequency of the STM32L152RE microcontroller?",
      options: ["16 MHz", "24 MHz", "32 MHz", "64 MHz"],
      answer: "32 MHz",
    },
    {
      question: "How many general-purpose input/output (GPIO) pins are available on the STM32 Nucleo-64 board?",
      options: ["32", "51", "64", "128"],
      answer: "51",
    },
    {
      question: "Which of the following is NOT a feature of the STM32 Nucleo-64 board?",
      options: ["Embedded ST-LINK/V2-1 Debugger/Programmer", "Wi-Fi connectivity", "User LED (LD2)", "MBED Enabled"],
      answer: "Wi-Fi connectivity",
    },
    {
      question: "What type of package does the STM32L152RE microcontroller use?",
      options: ["BGA", "LQFP", "PLCC", "DIP"],
      answer: "LQFP",
    },
    {
      question: "What is the function of the `DigitalOut` API in the Mbed framework?",
      options: ["To read the value of a digital input pin", "To configure a GPIO pin as a digital output pin", "To measure the analog voltage on a pin", "To generate a PWM signal"],
      answer: "To configure a GPIO pin as a digital output pin",
    },
    {
      question: "What is the purpose of the `wait(s)` API in the Mbed framework?",
      options: ["To set the duty cycle of a PWM signal", "To read data from a serial port", "To pause the execution of a program for a specified time", "To configure a timer"],
      answer: "To pause the execution of a program for a specified time",
    },
    {
      question: "Which API is used to combine multiple `DigitalOut` pins to write to them simultaneously?",
      options: ["DigitalIn", "PwmOut", "BusOut", "Serial"],
      answer: "BusOut",
    },
    {
      question: "What is the function of a `DigitalIn` object in the Mbed framework?",
      options: ["To configure a GPIO pin as a digital output", "To generate a PWM signal", "To read the logic level (0 or 1) of a digital input pin", "To control an external device"],
      answer: "To read the logic level (0 or 1) of a digital input pin",
    },
    {
      question: "What is the role of an IR sensor in an embedded system?",
      options: ["To measure temperature", "To control the speed of a motor", "To detect the presence of an object", "To display information"],
      answer: "To detect the presence of an object",
    },
    {
      question: "What determines the output voltage of a PWM signal?",
      options: ["The frequency of the PWM signal", "The period of the PWM signal", "The duty cycle of the PWM signal", "The amplitude of the PWM signal"],
      answer: "The duty cycle of the PWM signal",
    },
    {
      question: "What is the typical frequency of the control signal used to control a servo motor?",
      options: ["10 Hz", "25 Hz", "50 Hz", "100 Hz"],
      answer: "50 Hz",
    },
    {
      question: "What is the purpose of a USB Virtual Serial Port in the context of embedded systems development?",
      options: ["To provide a physical connection for programming the microcontroller", "To allow communication between the microcontroller and a host PC", "To store data on the microcontroller", "To control external devices"],
      answer: "To allow communication between the microcontroller and a host PC",
    },
    {
      question: "Which API is used to send a character from the Nucleo board to a host PC via the USB Virtual Serial Port?",
      options: ["getc", "putc", "printf", "read"],
      answer: "putc",
    },
    {
      question: "What is the resolution of the ADC on the STM32 Nucleo L152RE board?",
      options: ["8 bits", "10 bits", "12 bits", "16 bits"],
      answer: "12 bits",
    },
    {
      question: "What is the function of an LDR (Light Dependent Resistor)?",
      options: ["To emit light", "To convert light into electricity", "To vary its resistance based on light intensity", "To amplify electrical signals"],
      answer: "To vary its resistance based on light intensity",
    },
    {
      question: "How many DAC (Digital to Analog Converter) channels are available on the STM32 Nucleo L152RE board?",
      options: ["1", "2", "4", "8"],
      answer: "2",
    },
    {
      question: "What is the standard configuration of an LCD display often used in embedded systems?",
      options: ["8x1", "16x1", "16x2", "20x4"],
      answer: "16x2",
    },
    {
      question: "What is the purpose of the `RS` (Register Select) pin on an LCD display?",
      options: ["To control the contrast of the display", "To enable or disable the display", "To select between the command and data registers", "To control the backlight of the display"],
      answer: "To select between the command and data registers",
    },
    {
      question: "How many pins are typically used to interface a 4x4 matrix keypad with a microcontroller?",
      options: ["4", "7", "8", "16"],
      answer: "8",
    },
    {
      question: "What is the purpose of a watchdog timer (WDT) in a microcontroller?",
      options: ["To generate PWM signals", "To measure time intervals", "To reset the system in case of a software malfunction", "To provide a real-time clock"],
      answer: "To reset the system in case of a software malfunction",
    },
  ],
  module6: [
    {
      question: "Which of the following baud rates is NOT explicitly listed as an option for UART communication in the provided source?",
      options: ["9600", "115200", "57600", "250000"],
      answer: "250000"
    },
    {
      question: "In UART communication, what is the function of the start and stop bits?",
      options: [
        "They indicate the beginning and end of a data packet.",
        "They provide clock synchronization between devices.",
        "They are used for error detection and correction.",
        "They determine the baud rate of the communication."
      ],
      answer: "They indicate the beginning and end of a data packet."
    },
    {
      question: "What is the maximum size of the data frame in a UART communication packet, according to the source?",
      options: ["8 bits", "9 bits", "10 bits", "11 bits"],
      answer: "9 bits"
    },
    {
      question: "Which of the following is a disadvantage of UART communication, as highlighted in the source?",
      options: [
        "It requires a clock signal for synchronization.",
        "It uses four wires for communication.",
        "It does not support multiple slave devices.",
        "It is not a well-documented protocol."
      ],
      answer: "It does not support multiple slave devices."
    },
    {
      question: "What is the role of the Chip Select (CS) or Slave Select (SS) signal in SPI communication?",
      options: [
        "To transmit data from the master to the slave device",
        "To receive data from the slave device to the master",
        "To synchronize the data transmission between the devices",
        "To select a specific slave device for communication"
      ],
      answer: "To select a specific slave device for communication"
    },
    {
      question: "In SPI communication, which device is responsible for generating the clock signal?",
      options: [
        "The slave device",
        "The master device",
        "Both the master and slave devices",
        "An external clock generator"
      ],
      answer: "The master device"
    },
    {
      question: "How does SPI handle full-duplex communication?",
      options: [
        "It uses separate lines for transmitting and receiving data.",
        "It alternates between transmitting and receiving data on a single line.",
        "It employs time-division multiplexing to share the same line for both transmission and reception.",
        "It utilizes frequency-division multiplexing to distinguish between transmitted and received data."
      ],
      answer: "It uses separate lines for transmitting and receiving data."
    },
    {
      question: "What is the significance of Clock Polarity (CPOL) and Clock Phase (CPHA) in SPI communication?",
      options: [
        "They define the data transfer speed between devices.",
        "They determine the maximum number of slave devices that can be connected.",
        "They specify the voltage levels used for data transmission.",
        "They control the timing of data sampling and shifting relative to the clock signal."
      ],
      answer: "They control the timing of data sampling and shifting relative to the clock signal."
    },
    {
      question: "Which SPI mode is characterized by CPOL = 0 and CPHA = 1?",
      options: ["Mode 0", "Mode 1", "Mode 2", "Mode 3"],
      answer: "Mode 1"
    },
    {
      question: "In the daisy chain configuration of SPI, how are multiple slave devices connected to the master?",
      options: [
        "Each slave device has a dedicated SS/CS line connected to the master.",
        "The MOSI pin of one slave is connected to the MISO pin of the next slave, forming a chain.",
        "All slave devices share a common SS/CS line, and the master selects them sequentially.",
        "The slave devices are connected in parallel to the master's MOSI and MISO pins."
      ],
      answer: "The MOSI pin of one slave is connected to the MISO pin of the next slave, forming a chain."
    },
    {
      question: "What is one limitation of SPI compared to I2C, as mentioned in the source?",
      options: [
        "SPI has a lower data transfer rate than I2C.",
        "SPI requires more wires for communication than I2C.",
        "SPI does not support multiple master devices.",
        "SPI is not suitable for short-distance communication."
      ],
      answer: "SPI requires more wires for communication than I2C."
    },
    {
      question: "Which of the following is a key characteristic of I2C communication?",
      options: [
        "It uses four wires for data transmission.",
        "It is an asynchronous communication protocol.",
        "It supports multiple masters and multiple slaves.",
        "It is primarily used for long-distance communication."
      ],
      answer: "It supports multiple masters and multiple slaves."
    },
    {
      question: "What is the purpose of pull-up resistors in I2C communication?",
      options: [
        "To provide a clock signal for synchronization",
        "To limit the current flowing through the data lines",
        "To ensure that the signal lines remain in a known state when not actively driven",
        "To amplify the signals on the data lines"
      ],
      answer: "To ensure that the signal lines remain in a known state when not actively driven"
    },
    {
      question: "What is the function of the Read/Write bit in an I2C address frame?",
      options: [
        "To determine the direction of data transfer (master to slave or slave to master)",
        "To select the specific register to be accessed in the slave device",
        "To indicate the size of the data frame being transmitted",
        "To initiate a clock stretching sequence"
      ],
      answer: "To determine the direction of data transfer (master to slave or slave to master)"
    },
    {
      question: "How does I2C bus arbitration work when multiple master devices try to transmit simultaneously?",
      options: [
        "The master with the lowest device address gets priority.",
        "The master that initiates the communication first gets priority.",
        "A designated arbitration device determines which master gets priority.",
        "The masters use a wired-AND logic system to resolve conflicts."
      ],
      answer: "The masters use a wired-AND logic system to resolve conflicts."
    },
    {
      question: "What is the purpose of clock stretching in I2C communication?",
      options: [
        "To increase the data transfer speed between devices.",
        "To allow a slave device to temporarily halt the master's clock signal.",
        "To synchronize the clocks of multiple master devices.",
        "To reduce the power consumption of the communication."
      ],
      answer: "To allow a slave device to temporarily halt the master's clock signal."
    },
    {
      question: "What is the function of a repeated START condition in I2C communication?",
      options: [
        "To re-initialize the communication after an error.",
        "To allow the master to start a new communication without releasing the bus.",
        "To switch the direction of data transfer (from read to write or vice versa).",
        "To indicate the end of a data transmission."
      ],
      answer: "To allow the master to start a new communication without releasing the bus."
    },
    {
      question: "Which communication protocol is specifically designed for use in the automotive industry, as mentioned in the source?",
      options: ["UART", "SPI", "I2C", "CAN"],
      answer: "CAN"
    },
    {
      question: "What is the primary purpose of the identification number in a CAN message?",
      options: [
        "To specify the physical address of the destination node.",
        "To indicate the priority level of the message.",
        "To determine which node has access to the bus and to identify the type of message.",
        "To provide error detection and correction capabilities."
      ],
      answer: "To determine which node has access to the bus and to identify the type of message."
    },
    {
      question: "Which of the following is NOT a type of CAN frame mentioned in the source?",
      options: ["Data frame", "Remote frame", "Error frame", "Synchronization frame"],
      answer: "Synchronization frame"
    }
  ]
};

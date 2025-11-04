// 国际化语言配置
const translations = {
  'zh-CN': {
    // 页面标题和描述
    'page.title': '个人主页 | HUANG YONGQIANG',
    'page.description': '学术个人主页，包含关于我、研究兴趣、教育背景、论文发表、项目与教学等信息。',

    // 导航栏
    'nav.about': '关于我',
    'nav.research': '研究兴趣',
    'nav.education': '教育背景',
    'nav.experience': '研究经历',
    'nav.publications': '论文',
    'nav.projects': '工程项目',
    'nav.contact': '联系',
    'nav.toggle': '切换导航',

    // Hero区域
    'hero.subtitle': '浙江大学 · 过程装备与控制工程',
    'hero.download': '下载PDF简历',
    'hero.contact': '联系我',

    // 关于我
    'about.title': '关于我',
    'about.content': '背景横跨过程装备与控制工程与计算机科学，关注在物理/逻辑约束下的高效、稳健表征与生成方法，致力于提升具身智能的空间推理与人机协作系统的可靠性与可解释性。',

    // 研究兴趣
    'research.title': '研究兴趣',
    'research.item1': '结构化表征与稳健性：在物理/逻辑约束下的对比学习与潜空间稳定',
    'research.item2': '非欧几里得生成：层级点集重建、多尺度自回归与图表示',
    'research.item3': '人机协同与多模态翻译：低资源语言、任务-智能体映射与分配',

    // 教育背景
    'education.title': '教育背景',
    'education.degree': '学士，过程装备与控制工程',
    'education.school': '浙江大学（ZJU）',
    'education.time': '2021 - 2025',

    // 研究经历
    'experience.title': '研究经历',
    'experience.supervisor': '导师',
    'experience.intro': '项目简介:',
    'experience.role': '我的角色与贡献:',
    'experience.publication': '发表:',

    // 研究项目1
    'exp1.supervisor': '导师: Dr. Yu Kaicheng (WLU)',
    'exp1.intro': '本项目旨在探索人机协作场景，提供开源工作流平台用于人机共进化验证，验证人类在学习新知识/概念情境下等效于小参数/弱性能LLM，推动弱模型在人机系统领域的应用，以及多人/单人情境下工作流中任务设置与人机分配的映射规则。在此基础上提供工作流设计与分配理论。',
    'exp1.role': '作为项目负责人，负责平台(Autoflow)的全栈开发。主导核心研究问题制定、完整实验设计，目前正在进行数据收集与效果评估。',

    // 研究项目2
    'exp2.supervisor': '导师: Prof. Zhang Yue (WLU)',
    'exp2.intro': '独立项目，旨在为非欧数据设计新的生成范式。通过图数据引入层级关系，结合自回归解码器学习多层次空间表征。该模型旨在提升3D生成的可编辑性与可解释性，试图解决我在早期LLM研究中发现的表征挑战。',
    'exp2.role': '独立完成主框架构建，包括数据预处理、点云自编码器、图自编码器以及空间表征token的自回归解码器开发。',

    // 研究项目3
    'exp3.supervisor': '导师: Dr. Zhao Junbo, Researcher (ZJU)',
    'exp3.intro': '构建多智能体系统框架以展示LLM的空间理解与规划能力。使用GPT系列作为基础模型进行规划，生成不同粒度的场景图，结合知识图谱与遗传算法求解器实现场景构建与更新。该项目深刻揭示了LLM在空间推理中的不可靠性(幻觉问题)，成为后续研究基础表征的主要动机。',
    'exp3.role': '作为项目负责人及第一作者，从概念到发表全程主导。设计多智能体协作框架，集成知识图谱，开发3D可视化工作流。',

    // 研究项目4
    'exp4.supervisor': '导师: Dr. Zhao Junbo, Researcher (ZJU)',
    'exp4.intro': '提出变分逆向编码器(VIE)框架，引入不变潜空间假设与动态过滤机制，有效解决逆向攻击问题，提升大规模语言模型的安全性与鲁棒性。',
    'exp4.role': '参与实验设计，主要负责获取基线数据与部分鲁棒性数据，完成从代码拆解、模型训练、推理到多准则评估的完整流程。',

    // 研究项目5
    'exp5.supervisor': '导师: Dr. Zhao Junbo, Researcher (ZJU)',
    'exp5.intro': '从注意力视角分析LLM活动的可解释性，特别是LLM处理逻辑扰动语句时的注意力活动，希望总结一套指标评估LLM处理复杂逻辑的能力。',
    'exp5.role': '主导研究。最初识别高层逻辑特征的实验未产生清晰结果，受稀疏注意力启发，我调整方向并证明简单CNN可在字符级扰动期间提取鲁棒注意力特征。该项目强化了方法论坚持的价值。',

    // 研究项目6
    'exp6.supervisor': '导师: Prof. Zhang Yue (WLU)',
    'exp6.intro': '探索多模态数据是否及如何为低资源语言翻译任务补充额外信息。',
    'exp6.role': '设计基础实验，包括平行语料数据获取与预处理、提示设计、模型部署、推理任务执行与评估。',

    // 论文发表
    'publications.title': '论文发表',

    // 工程项目
    'projects.title': '工程项目',

    // 工程项目1
    'proj1.supervisor': '导师: Prof. Shan Yan (ZJU)',
    'proj1.intro': '毕业设计项目，主要涉及开发接口插件以实现VeryEngine与ADAMS仿真软件之间的信息交换。',

    // 工程项目2
    'proj2.supervisor': '导师: Dr. Qian Jinyuan, Associate Professor (ZJU)',
    'proj2.intro': '校园科技创新平台提供的工程项目，参与了装置设计与专利编辑工作。',

    // 工程项目3
    'proj3.supervisor': '导师: Prof. Wang Xiuyu (ZJU)',
    'proj3.intro': '作为团队负责人，协调团队工作、设计装置、开展实验并汇报结果。获校级节能减排竞赛二等奖。',

    // 研究项目标题
    'exp1.title': '工作流中任务设置与人机分配映射',
    'exp2.title': '自回归层级3D对象重建',
    'exp3.title': '通过几何约束LLM导航复杂物理世界',
    'exp4.title': '从不变潜空间视角看大语言模型的逆向攻击',
    'exp5.title': 'LLM在进行浅层变化时关注什么',
    'exp6.title': '多模态模型在不平衡语料中的翻译性能探索',

    // 工程项目标题
    'proj1.title': '数据接口与运动可视化开发',
    'proj2.title': '燃气安全自闭阀',
    'proj3.title': '基于高效催化剂的浮岛曝气装置',

    // 联系方式
    'contact.title': '联系',
    'contact.phone': '电话',
    'contact.email': '邮箱',
    'contact.scholar': '（待提供）',

    // 页脚
    'footer.download': '下载简历'
  },

  'en': {
    // 页面标题和描述
    'page.title': 'Personal Homepage | HUANG YONGQIANG',
    'page.description': 'Academic personal homepage, including about me, research interests, education, publications, projects and teaching.',

    // 导航栏
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.publications': 'Publications',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.toggle': 'Toggle navigation',

    // Hero区域
    'hero.subtitle': 'Zhejiang University · Process Equipment and Control Engineering',
    'hero.download': 'Download CV (PDF)',
    'hero.contact': 'Contact Me',

    // 关于我
    'about.title': 'About Me',
    'about.content': 'With a background spanning Process Equipment & Control Engineering and Computer Science, I focus on efficient and robust representation and generation methods under physical/logical constraints, committed to enhancing spatial reasoning in embodied intelligence and the reliability and interpretability of human-machine collaboration systems.',

    // 研究兴趣
    'research.title': 'Research Interests',
    'research.item1': 'Structured Representation & Robustness: Contrastive learning and latent space stability under physical/logical constraints',
    'research.item2': 'Non-Euclidean Generation: Hierarchical point cloud reconstruction, multi-scale autoregression, and graph representation',
    'research.item3': 'Human-Machine Collaboration & Multimodal Translation: Low-resource languages, task-agent mapping and allocation',

    // 教育背景
    'education.title': 'Education',
    'education.degree': 'B.Eng., Process Equipment and Control Engineering',
    'education.school': 'Zhejiang University (ZJU)',
    'education.time': '2021 - 2025',

    // 研究经历
    'experience.title': 'Research Experience',
    'experience.supervisor': 'Supervisor',
    'experience.intro': 'Project Overview:',
    'experience.role': 'My Role & Contribution:',
    'experience.publication': 'Publication:',

    // 研究项目1
    'exp1.supervisor': 'Supervisor: Dr. Yu Kaicheng (WLU)',
    'exp1.intro': 'This project aims to explore human-machine collaboration scenarios by providing an open-source workflow platform for human-machine co-evolution validation. It verifies that humans in learning new knowledge/concepts are equivalent to small parameter/weak performance LLMs, promotes the application of weak models in human-machine systems, and explores mapping rules for task settings and human-machine distribution in multi-person/single-person workflows. Based on this, it provides workflow design and allocation theory.',
    'exp1.role': 'As project leader, responsible for full-stack development of the platform (Autoflow). Leading core research question formulation and complete experimental design. Currently conducting data collection and effectiveness evaluation.',

    // 研究项目2
    'exp2.supervisor': 'Supervisor: Prof. Zhang Yue (WLU)',
    'exp2.intro': 'Independent project aimed at designing a new generation paradigm for non-Euclidean data. Introducing hierarchical relationships through graph data, combined with autoregressive decoders to learn multi-level spatial representations. The model aims to improve the editability and interpretability of 3D generation, attempting to address representation challenges discovered in my early LLM research.',
    'exp2.role': 'Independently completed the main framework construction, including data preprocessing, point cloud autoencoder, graph autoencoder, and autoregressive decoder development for spatial representation tokens.',

    // 研究项目3
    'exp3.supervisor': 'Supervisor: Dr. Zhao Junbo, Researcher (ZJU)',
    'exp3.intro': 'Building a multi-agent system framework to demonstrate LLM spatial understanding and planning capabilities. Using GPT series as base models for planning, generating scene graphs at different granularities, combining knowledge graphs with genetic algorithm solvers for scene construction and updates. This project profoundly revealed LLM unreliability in spatial reasoning (hallucination issues), becoming the main motivation for subsequent research on fundamental representations.',
    'exp3.role': 'As project leader and first author, led the entire process from concept to publication. Designed multi-agent collaboration framework, integrated knowledge graphs, and developed 3D visualization workflows.',

    // 研究项目4
    'exp4.supervisor': 'Supervisor: Dr. Zhao Junbo, Researcher (ZJU)',
    'exp4.intro': 'Proposed the Variational Inversion Encoder (VIE) framework, introducing invariant latent space assumptions and dynamic filtering mechanisms to effectively solve inversion attack problems and improve the security and robustness of large language models.',
    'exp4.role': 'Participated in experimental design, mainly responsible for obtaining baseline data and partial robustness data, completing the entire process from code decomposition, model training, inference to multi-criteria evaluation.',

    // 研究项目5
    'exp5.supervisor': 'Supervisor: Dr. Zhao Junbo, Researcher (ZJU)',
    'exp5.intro': 'Analyzing the interpretability of LLM activities from an attention perspective, particularly LLM attention activities when processing logically perturbed sentences, hoping to summarize a set of indicators to evaluate LLM capabilities in handling complex logic.',
    'exp5.role': 'Led the research. Initial experiments to identify high-level logical features did not produce clear results. Inspired by sparse attention, I adjusted direction and proved that simple CNNs can extract robust attention features during character-level perturbations. This project reinforced the value of methodological persistence.',

    // 研究项目6
    'exp6.supervisor': 'Supervisor: Prof. Zhang Yue (WLU)',
    'exp6.intro': 'Exploring whether and how multimodal data can supplement additional information for low-resource language translation tasks.',
    'exp6.role': 'Designed basic experiments, including parallel corpus data acquisition and preprocessing, prompt design, model deployment, inference task execution and evaluation.',

    // 论文发表
    'publications.title': 'Publications',

    // 工程项目
    'projects.title': 'Engineering Projects',

    // 工程项目1
    'proj1.supervisor': 'Supervisor: Prof. Shan Yan (ZJU)',
    'proj1.intro': 'Graduation design project, mainly involving the development of interface plugins to achieve information exchange between VeryEngine and ADAMS simulation software.',

    // 工程项目2
    'proj2.supervisor': 'Supervisor: Dr. Qian Jinyuan, Associate Professor (ZJU)',
    'proj2.intro': 'Engineering project provided by the campus technology innovation platform, participated in device design and patent editing work.',

    // 工程项目3
    'proj3.supervisor': 'Supervisor: Prof. Wang Xiuyu (ZJU)',
    'proj3.intro': 'As team leader, coordinated team work, designed devices, conducted experiments and reported results. Won second prize in university-level energy conservation and emission reduction competition.',

    // 研究项目标题
    'exp1.title': 'Mapping task settings and human-machine distribution in workflows',
    'exp2.title': 'Autoregressive Hierarchical 3D Object Reconstruction',
    'exp3.title': 'Navigate Complex Physical Worlds via Geometrically Constrained LLM',
    'exp4.title': 'An Invariant Latent Space Perspective on Inversion Attack to Large Language Models',
    'exp5.title': 'What is LLM Focusing on When Making a Superficial Change',
    'exp6.title': 'Exploration of Translation Performance of Multimodal Models in Unbalanced Corpus',

    // 工程项目标题
    'proj1.title': 'Development of Data Interface and Motion Visualization',
    'proj2.title': 'Gas Safety Self-closing Valve',
    'proj3.title': 'Floating Island Aeration Devices Based on High-efficiency Catalysts',

    // 联系方式
    'contact.title': 'Contact',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.scholar': '(To be provided)',

    // 页脚
    'footer.download': 'Download CV'
  }
};

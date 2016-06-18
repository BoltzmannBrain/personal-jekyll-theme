---
layout: post
section-type: post
title: TechWorld interview
category: Machine Learning
tags: [ML, Numenta]
---

I did [an interview with TechWorld on machine learning advice for developers](http://www.techworld.com/tutorial/apps/everything-uk-developers-need-know-about-machine-learning-3641971/), but the final writeup didn't include most of the material :neutral_face:, so below are the questions with my full answers. Enjoy!

**1. How should developers get started on this topic - what do you recommend as a first step?**

Study. When I started in AI and ML I read Peter Norvig’s “Artificial Intelligence: A Modern Approach”, and I’ve probably read it three times now. It’s important to fundamentally understand the algorithms you’ll be using, otherwise every ML method is a black box and the best you can do is blindly throw them at problems. Then try doing ML projects, like Kaggle competitions, where you have a clear definition of what you’re trying to learn—like a specific algorithm or toolkit. You’re going to fail, often, but that’s how to best learn ML techniques.

**2a. Can you talk me through the process of setting up a machine learning framework?**

The first, and most important step, is to understand the problem you’re trying to solve. What are the inputs and desired outputs? What is the data? Thoroughly understanding the data, before experimenting with algorithms, is critical. Otherwise you can have no realistic confidence in the result quality or reliability. You’ll most likely also need to preprocess and transform the data, and maybe get more data. The next step in the ML process is to consider the algorithms and methods you have at your disposal. For the algorithms that are suitable for your problem and data, there are many criteria to consider, such as reliability, efficiency, scalability, and so on. Keep in mind any given method (e.g. deep learning) is not a hammer for every nail. I often see engineers are dissatisfied with their results because they immediately throw deep learning models at their data without first understanding the real problem. With your lineup of ML algorithms to work with, the next step is to run, investigate, and improve. Evaluate the algorithms’ results with techniques like k-fold cross validation and statistical significance tests. Now you can flush the algorithms that are good at finding and using the structure in the data, and that are attacking the problem. More focused experiments with these algorithms will help you fine tune and improve the results. Now with your top performing algorithm(s) you may try things like ensemble methods or more feature engineering to get the best possible results. That was a lot, so in sum: (1) define the problem, (2) analyze and prepare the data, (3) select algorithms, (4) run and evaluate the algorithms, (5) improve the results with focused experiments, and (6) finalize results with fine tuning. I should mention that if you intend this ML framework to be shared or deployed, document every step of the way. This will come in handy for you and other engineers down the road.

**2b. Can you talk me through the process of building a machine learning toolkit?**

[NuPIC](www.numenta.org) is the open-source toolkit for running our technology, Hierarchical Temporal Memory (HTM). NuPIC offers developers the unique opportunity to work hands-on with state of the art machine intelligence. For us there are two main initiatives: building and supporting a strong community, and incorporating our cutting edge machine intelligence research. Our open-source flag bearer, Matt Taylor, does a phenomenal job of the former, and I can speak more to the latter. In research we do a lot of work in neuroscience theory, mathematical derivations, and algorithm experimentation. Most algorithms never make it beyond the whiteboard because they don’t fit cohesively into our framework of how the neocortex works. To develop algorithms for use, there is extensive prototyping and testing. We include extensive documentation before a modified or new algorithm is released in NuPIC. We also discuss the algorithms openly with the NuPIC community and value their contributions, both to the theory and to the code.

**3. Which are the best machine learning tools or platforms for devs?**

This really depends on what problems your trying to solve, specifically the data you’re dealing with. That being said, open-source reigns supreme. There are many high-quality, open-source machine learning toolkits for developers to leverage, and the communities are active and helpful. In the Python world, I really like Scikit-learn for it’s broad range of machine learning and data analytics tools. For the same reason I like mlpack for C++ developers. NLTK is a goto for natural language processing (NLP) methods and data, although deep learning packages implement high quality NLP algorithms. If you’re trying to do streaming analytics, NuPIC is best; it’s state-of-the-art AI, with an incredible repository and community, and implemented in Python, C++, Java, and Flink. Specifically for deep learning we’re seeing a lot of good, fast frameworks: check out Theano, Neon, or Google's TensorFlow. In Java, I highly recommend deeplearning4j; it's deep learning plus more machine learning tools, written by some very smart engineers.

**4. Are there any languages that are best for them to focus on for ML?**

Python, without a doubt. Most machine learning and data analytics toolkits are in Python, and it has a huge, helpful community. The advanced methods, like HTM and deep learning are often implemented in Python.

**5. Are there any devs/examples of work that you'd recommend looking at for inspiration in this area?**

For streaming analytics, which presents the biggest need for more development in ML, I’d recommend looking at the [Numenta Anomaly Benchmark (NAB)](github.com/numenta/NAB). We present real world data streams and test several state-of-the-art anomaly detection algorithms, as well as traditional data analytics techniques. It’s all open-source and easy for ML engineers and developers to get involved. For other ML projects, I follow many researchers in the field, such as the teams at Google Brain and Facebook AI; they’ve been doing some great work in NLP. In general I enjoy trolling the ShowHackerNews site for new projects that other developers are sharing.

**6. What’s it like doing machine learning research?**

Most of ML research is tweaking existing algorithms, or in developing ML pipelines to deploy at scale. Machine intelligence (MI) is a different animal. MI calls for fundamental research because the exact properties and algorithms underlying intelligence are still unknown. To build MI we’re working to discover the fundamental properties of intelligence, abstract them into a computational framework, and implement the algorithms in SW for machine learning applications.

**7. How’s machine learning different from machine intelligence?**
ML is building software systems that aim to improve with experience. ML algorithms perform specific, narrow tasks, like playing a particular game. An example is deep learning or clustering algorithms. MI is the software manifestation of intelligence: not the ability to perform a specific task, but rather it is the ability to discover stucture in the world through sensory-motor interaction, and then use that knowledge to achieve goals. Perhaps a more clear definition of MI is through its requirements: the machine must learn from unlabeled data streams, continuously, while making predictions, detecting anomalies, and doing classification; i.e., what the human brain does. HTM is machine intelligence.

**8. What’s in store for Numenta? What’s in the future?**

Although we’ve made a lot of progress, there’s still work to do. We’re building out the core theory and testing the algorithms in experiments. It’s not an easy task to program the algorithms of the neocortex. We can’t exactly put a release date on it, but we’re confident that HTM will make significant contributions to both the neuroscience and AI fields.

***Intro:** Alex Lavin is a Software Engineer and Researcher at Numenta, a machine intelligence company tackling what is arguably the most important scientific challenge of all time: reverse engineering the neocortex. Alex's focus is in natural language processing, or developing algorithms that enable computers to process and understand human language. Alex studied mechanical and aerospace engineering at Cornell, and robotics at Carnegie Mellon. He was recently selected to the Forbes 30 Under 30 List for Science.*

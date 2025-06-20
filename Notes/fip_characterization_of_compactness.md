---
title: FIP Characterization of Compactness
date: 2025-06-20
tags: [In_Progress]
---

\begin{theorem}

A \ref[topological space]{topological_space} $X$ is \ref[compact]{compact_space} iff every FIP-family of closed sets has non-empty intersection, i.e., if $\mc{F}$ is a family of closed subsets of $X$ such that $\bigcap\mc{F}_0\neq\e$ for every finite $\mc{F}_0\subeq\mc{F}$, we have $\bigcap\mc{F}\neq\e$.

\end{theorem}

\begin{proof}

Given such a collection $\mc{F}$ of closed subsets of $X$, the collection $\mc{U}\coloneqq\l\\{F^c\r\\}\_{F\in\mc{F}}$ of open sets a cover of $X$ iff $\bigcap\mc{F}=\e$. Note that $\mc{F}$ has the FIP iff no finite subcollection of $\l\\{U_\alpha\r\\}$ covers $X$, so the result follows.<span style="float:right;">$\blacksquare$</span>

\end{proof}

---
title: Irrational Rotation
date: 2025-05-21
tags: [In_Progress]
---

Here, we consider the circle as $S^1\coloneqq\R/\Z\iso[0,1)$. Fix an angle $\alpha\in S^1\comp\Q$.

\begin{definition}

The _rotation map with angle $\alpha$_ is the map $R_\alpha:S^1\to S^1$ given by $x\mapsto x+\alpha$ mod $1$.

<br>

&emsp;&emsp;We say that $R_\alpha$ is an _irrational rotation_ if $\alpha$ is irrational.

\end{definition}

# Topological properties

Equipping $S^1$ with the \ref[quotient topology]{quotient_topology}, $(S^1,R_\alpha)$ becomes a \ref[topological system]{topological dynamical system}.

\begin{proposition}\label{irrational_rotation_minimal}

The rotation $R_\alpha$ is a \ref[minimal]{minimal_topological_system} topological dynamical system iff $\alpha$ is irrational.

\end{proposition}

\begin{proof}

If $\alpha$ is rational, then $R_\alpha$ is periodic and hence the orbit $X\coloneqq\l\\{n\alpha\r\\}_{n\in\Z}$ is finite.

<br>

&emsp;&emsp;Conversely, it suffices to show that $X$ approaches $0$. To this end, note that there exists some $n\in\Z$ such that $0\in[n\alpha,(n+1)\alpha]$, and without loss of generality, we can assume that $d(0,(n+1)\alpha)\leq d(0,n\alpha)$. Thus $\alpha_1\coloneqq(n+1)\alpha$ is in the orbit of $\alpha$ and $d(0,\alpha_1)\leq d(0,\alpha)/2$, so replacing $\alpha$ by $\alpha_1$ and repeating furnishes a sequence $\alpha_n\to0$, as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{remark}

In contrast, every homeomorphism on $S^{2n}$ has a fixed point by \ref[Brower's Fixed Point Theorem]{browers_fixed_point_theorem}, and hence there are no minimal systems on $S^{2n}$.

\end{remark}

# Ergodic properties

Since $S^1$ is (\ref[locally-]{locally-compact_space})\ref[compact]{compact_space} \ref[Hausdorff]{hausdorff_space}, we can equip $S^1$ with its \ref[Haar measure]{haar_measure} (given by \ref[pushing forward]{push_forward_measure} the \ref[Lebesgue measure]{measures_on_reals#lebesgue_measure} under the \ref[exponential map]{exponential_map}) to obtain a \ref[measure-preserving dynamical system]{measure-preserving_dynamical_system} $(S^1,\lambda,R_\alpha)$.

\begin{proposition}\label{irrational_rotation_ergodic}

The rotation $R_\alpha$ is an \ref[ergodic]{ergodic} measure-preserving dynamical system iff $\alpha$ is irrational.

\end{proposition}

&emsp;&emsp;We will need the following lemma.

\begin{fact}[\ref[99{%} Lemma]{99_lemma_lebesgue}]

For any measurable $A\subeq[0,1)$ with positive Lebesgue measure, there is an interval $I\subeq[0,1)$ such that at-least 99\% of $I$ is covered by $A$, i.e., $\lambda(A\cap I)/\lambda(I)\geq0.99$.

\end{fact}

\begin{proof}[of Proposition \iref{irrational_rotation_ergodic}]

If $\alpha$ is rational, then the orbit $X\coloneqq\l\\{n\alpha\r\\}_{n\in\Z}$ is finite, and is hence null.

\end{proof}

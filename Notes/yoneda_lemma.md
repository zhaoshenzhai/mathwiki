---
title: The Yoneda Lemma
date: 2024-05-29T18:17:16-04:00
references: []
tags: []
---

# The Yoneda Embedding $\mf{y}$

## Statement & Proof

Fix a locally-small category $C$.

{{< env "theorem" "Yoneda" >}}

Let $C$ be a locally-small category and fix $F:C\to\catset$. For every $c\in C$, we have a bijection
$$\begin{equation}
    y_{F,c}:\Hom(C(c,\slot),F)\to Fc\ \ \ \ \ \ \ \ \mathit{sending}\ \ \ \ \ \ \ \ \big(\eta:C(c,\slot)\to F\big)\mapsto\eta_c1_c
\end{equation}$$
which is moreover natural in both $F$ and $c$.

{{< /env >}}

*Proof (Bijection).* 

<br><br>

*Proof (Naturality).* 

<br><br>

## Extensions and Corollaries

{{< env "theorem" "Yoneda Embedding" >}}

For any locally-small category $C$, the Yoneda embedding $\mf{y}:C^\textrm{op}\to\catset^C$ is fully-faithful.

{{< /env >}}

# Interpretations

## Group Actions

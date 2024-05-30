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
    y\coloneqq y_{F,c}:\Hom(C(c,\slot),F)\to Fc\ \ \ \ \ \ \ \ \mathit{sending}\ \ \ \ \ \ \ \ \big(\eta:C(c,\slot)\to F\big)\mapsto\eta_c1_c
\end{equation}$$
which is moreover natural in both $F$ and $c$.

{{< /env >}}

*Proof (Bijection).* Define a function $t\coloneqq t_{F,c}:Fc\to\Hom(C(C,\slot),F)$ by sending an element $a\in Fc$ to the natural transformation $t(a):C(c,\slot)\to F$ via
$$\begin{equation}
    t(a)_d:C(c,d)\to Fd\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ (f:a\rightarrow b)\mapsto Ff(a)\in Fd
\end{equation}$$
for each $d\in C$. That $a=y(t(a))$ is immediate since $t(a)_c(1_c)=F(1_c)a=1_ca=a$.

<br>&emsp;&emsp;Conversely, let $\eta:C(c,\slot)\to F$ be a natural transformation, whence the diagram
{{< tikz name="yoneda_bijection" width="325" >}}
\begin{equation*}
    \begin{tikzcd}
        c \ar[d, "f"] & C(c,c) \ar[r, "\eta_c"] \ar[d, "f_\ast"'] & Fc \ar[d, "Ff"] \\
        d & C(c,d) \ar[r, "\eta_d"] & Fd
    \end{tikzcd}
\end{equation*}
{{< /tikz >}}
commutes for any morphism $f:c\to d$. In particular, chasing $1_c\in C(c,c)$ around gives us $Ff(\eta_c(1_c))=\eta_d(f_\ast1_c)$. Thus $t(y(\eta))_df=Ff(y(\eta))=\eta_df$ for all $f:c\to d$, giving us $t(y(\eta))=\eta$ as desired.<span style="float:right;">$\blacksquare$</span>

<br><br>

*Proof (Naturality).* 

<br><br>

## Extensions and Corollaries

{{< env "theorem" "Yoneda Embedding" >}}

For any locally-small category $C$, the Yoneda embedding $\mf{y}:C^\textrm{op}\to\catset^C$ is fully-faithful.

{{< /env >}}

# Interpretations

## Group Actions

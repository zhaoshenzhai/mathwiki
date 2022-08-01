<br />
<br />

Date Created: 28/03/2022 15:27:25
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [Kernel/Null Space](Kernel;%20Null%20Space.md)
Generalizations: _Not Applicable_

Properties: [Solutions of $A\v{x}=\v{b}$ decompose as $\l\{\v{s}_p\r\}+\nullsp A$ for any $A\v{s}_p=\v{b}$](Solutions%20of%20a%20linear%20system%20decompose%20as%20sum%20of%20particular%20and%20null.md)
Sufficiencies: [Homogeneous $m\times n$ linear system with $n>m$ has non-trivial solutions](Homogeneous%20linear%20system%20with%20more%20unknowns%20than%20equations%20has%20non-trivial%20solutions.md)
Equivalences: [Homogeneous system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ columns of $A$ are linearly independent](Homogeneous%20linear%20system%20only%20trivial%20solution%20iff%20columns%20of%20coefficient%20matrix%20are%20linearly%20independent.md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field. An $m\times n$ linear system $A\v{x}=\v{b}$ of equations over $K$ is said to be **homogeneous** if $\v{b}=\v{0}$. Otherwise, the system is said to be **inhomogeneous**._

```

**Remark.** The solution set of $A\v{x}=\v{0}$ is $\nullsp A$ since
$$\begin{equation}
    \begin{aligned}
        \v{s}\in\nullsp A&\Leftrightarrow\v{s}\in\ker L_A && \textrm{Definition of $\nullsp$}  \\
        &\Leftrightarrow L_A\l(\v{s}\r)=\v{0} && \textrm{Definition of $\ker$} \\
        &\Leftrightarrow A\v{s}=\v{0}. && \textrm{Definition of $L_A$}
    \end{aligned}
\end{equation}$$
From this and the Dimension Theorem, we see that the dimension of the solution set of $A\v{x}=\v{0}$ is $n-\rank A$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Observe that $\v{0}$ is a solution of any $A\v{x}=\v{0}$, so it is called the **trivial solution** of the system.<span style="float:right;">$\blacklozenge$</span>

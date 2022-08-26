<div class="topSpace"></div>

Date Created: 19/08/2022 22:08:16
Tags: #Proposition #Later/Classical_Mechanics

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Consider the Galilean $3$-coordinate space $\tpl{\R\times\R^3,\R\times\R^3,+,t,\bilform{\slot}{\slot}}$ and fix $\v{v}\in\R^3$. Then the function_
$$\begin{equation}
    g:\R\times\R^3\to\R\times\R^3\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \tpl{\tau,\v{x}}\mapsto\tpl{\tau,\v{x}+\v{v}\tau}
\end{equation}$$
_is a Galilean transformation._

```

_Proof_. We verify that $g$ preserves time intervals and spatial distances between simultaneous events.
* (Time intervals): Take $\tpl{\tau_1,\v{x}_1},\tpl{\tau_2,\v{x}_2}\in\R\times\R^3$. Observe then that
$$\begin{equation}
    \begin{aligned}
        t\l(g\l(\tau_2,\v{x}_2\r)-g\l(\tau_1,\v{x}_1\r)\r)&=t\l(\tpl{\tau_2,\v{x}_2+\v{v}\tau_2}-\tpl{\tau_1,\v{x}_2+\v{v}\tau_1}\r) && \textrm{Definition of $g$} \\
        &=t\l(\tpl{\tau_2,\v{x}_2}-\tpl{\tau_1,\v{x}_1}+\tpl{0,\v{v}\tau_2-\v{v}\tau_1}\r) && \textrm{Definition of $+$} \\
        &=t\l(\tpl{\tau_2,\v{x}_2}-\tpl{\tau_1,\v{x}_1}\r)+t\l(0,\v{v}\tau_2-\v{v}\tau_1\r) && \textrm{Linearity of $t$} \\
        &=t\l(\tpl{\tau_2,\v{x}_2}-\tpl{\tau_1,\v{x}_1}\r). && t=\proj
    \end{aligned}
\end{equation}$$
* (Spatial distances): Take $\tpl{\tau,\v{x}}\in\R\times\R^3$ and let $\tpl{\tilde{\tau}_1,\tilde{\v{x}}_1}$ and $\tpl{\tilde{\tau}_2,\tilde{\v{x}}_2}$ be in the space of events simultaneous to $\tpl{\tau,\v{x}}$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \bilform{g\l(\tilde{\tau}_1,\tilde{\v{x}}_1\r)-g\l(\tau,x\r)}{g\l(\tilde{\tau}_2,\tilde{\v{x}}_2\r)-g\l(\tau,x\r)}&=\bilform{\tpl{\tilde{\tau}_1,\tilde{\v{x}}_1+\v{v}\tilde{\tau}_1}-\tpl{\tau,\v{x}+\v{v}\tau}}{\tpl{\tilde{\tau}_2,\tilde{\v{x}}_2+\v{v}\tilde{\tau}_2}-\tpl{\tau,\v{x}+\v{v}\tau}} && \textrm{Definition of $g$} \\
        &=\bilform{\tpl{\tilde{\tau}_1-\tau,\tilde{\v{x}}_1-\v{x}+\v{v}\tilde{\tau}_1-\v{v}\tau}}{\tpl{\tilde{\tau}_2-\tau,\tilde{\v{x}}_2-\v{x}+\v{v}\tilde{\tau}_2-\v{v}\tau}} && \textrm{Definition of $+$} \\
        &=\l\{\begin{aligned}
            &\bilform{\tpl{\tilde{\tau}_1-\tau,\tilde{\v{x}}_1-\v{x}}}{\tpl{\tilde{\tau}_2-\tau,\tilde{\v{x}}_2-\v{x}}} \\
            &+\bilform{\tpl{\tilde{\tau}_1-\tau,\tilde{\v{x}}_1-\v{x}}}{\tpl{0,\v{v}\tilde{\tau}_2-\v{v}\tau}} \\
            &+\bilform{\tpl{0,\v{v}\tilde{\tau}_1-\v{v}\tau}}{\tpl{\tilde{\tau}_2-\tau,\tilde{\v{x}}_2-\v{x}}} \\
            &+\bilform{\tpl{0,\v{v}\tilde{\tau}_1-\v{v}\tau}}{\tpl{0,\v{v}\tilde{\tau}_2-\v{v}\tau}}
        \end{aligned}\r. && \textrm{Bilinearity of $\bilform{\slot}{\slot}$} \\
        &=\l\{\begin{aligned}
            &\bilform{\tpl{\tilde{\tau}_1-\tau,\tilde{\v{x}}_1-\v{x}}}{\tpl{\tilde{\tau}_2-\tau,\tilde{\v{x}}_2-\v{x}}} \\
            &+\v{v}\l(\tilde{\tau}_2-\tau\r)\l(\tilde{\v{x}}_1-\v{x}\r) \\
            &+\v{v}\l(\tilde{\tau}_1-\tau\r)\l(\tilde{\v{x}}_2-\v{x}\r) \\
            &+\v{v}^2\l(\tilde{\tau}_1-\tau\r)\l(\tilde{\tau}_2-\tau\r) \\
        \end{aligned}\r. && \textrm{Definition of $\bilform{\slot}{\slot}$} \\
    \end{aligned}
\end{equation}$$

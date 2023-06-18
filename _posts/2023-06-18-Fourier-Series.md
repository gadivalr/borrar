---
title: Serie de Fourier 
date: 2023-06-18
layout: post
comments: true
usemathjax: true
image: /assets/img/R.png
---
### Apuntes representación de funciones mediante series de Fourier real
a serie de Fourier sirve para representar una función periódica como una suma infinita de funciones seno y coseno con diferentes frecuencias y amplitudes. Esto permite analizar la función en términos de su espectro de frecuencias, es decir, las componentes armónicas que la forman. La serie de Fourier lleva el nombre del matemático francés Jean-Baptiste Joseph Fourier, quien la descubrió en 1822. 

La serie de Fourier de una función f(x) definida en el intervalo [ -L,L ] es la serie trigonométrica:
{% raw %}
$$
\begin{align*}
 
f(x) &=\frac{a_0}{2} +\sum_{n=1}^{+\infty}\quad \Bigl[ a_n\cos\Bigl(\frac{n\pi x}{L}\Bigr)+b_n\sin\Bigl(\frac{n\pi x}{L}\Bigr) \Bigr]\\
&\text{Donde los coeficientes son:}\\
a_0&=\frac{1}{L}\int_{-L}^{L} f(x) \, dx\\ \quad a_n&=\frac{1}{L}\int_{-L}^{L} f(x) \cos(\frac{n\pi x}{L}) \, dx
\\ \quad b_n&=\frac{1}{L}\int_{-L}^{L} f(x) \sin(\frac{n\pi x}{L}) \, dx \\
\end{align*}
$$
{% endraw %}

La S.F de una función par en el intervalo [ -L,L ] es la serie de cosenos:




{% raw %}
$$
\begin{align*}
f(x)&=a_0+\sum_{n=1}^{+\infty} \quad a_n\cos(\frac{n\pi x}{L})\\
a_0&=\frac{2}{L}\int_{0}^{L} f(x) \, dx\\ \quad a_n&=\frac{2}{L}\int_{0}^{L} f(x) \cos(\frac{n\pi x}{L}) \, dx
\end{align*}
$$
{% endraw %}

La S.F de una función impar en el intervalo [ -L,L ] es la serie de senos:

{% raw %}
$$
\begin{align*}
 f(x)&=\sum_{n=1}^{+\infty} \quad b_n\sin(\frac{n\pi x}{L})\\
 b_n&=\frac{2}{L}\int_{0}^{L} f(x) \sin(\frac{n\pi x}{L}) \, dx \\
\end{align*}
$$
{% endraw %}
Ejemplo: Hallar la S. F de la función:


{% raw %}
$$
\begin{align*}
f(x)&=\begin{cases} -1 & \text{si } -\pi<x<0 \\ \quad1 & \text{si } 0<x<\pi \end{cases}
\end{align*}
$$
{% endraw %}

Solución:
Notamos que la función es impar, por lo tanto, la serie de Fourier será de senos. Además, la función es periódica de periodo 2π, por lo tanto, L=π. Calculamos el b_n:



{% raw %}
$$
\begin{align*}

b_n&=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x) \sin(\frac{n\pi x}{\pi}) \, dx\\
&=\frac{1}{\pi}\int_{-\pi}^{0} (-1) \sin(n x) \, dx \\
&+\frac{1}{\pi}\int_{0}^{\pi} (1) \sin(n x) \, dx\\
&=\frac{1}{\pi}{\Bigl[ \frac{1}{n}\cos(nx) \Bigr]}_{-\pi}^{0} -\frac{1}{\pi}{\Bigl[ \frac{1}{n}\cos(nx) \Bigr]}_{0}^{\pi}\\
&=\frac{1}{\pi}\Bigl[ \frac{\cos(0)}{n} -\frac{\cos(-n\pi)}{n} \Bigr] -\frac{1}{\pi}\Bigl[ \frac{\cos(n\pi)}{n} \\
&-\frac{\cos(0)}{n} \Bigr]\\
&=\frac{1}{\pi}\Bigl[ \frac{1}{n} -\frac{1}{n}\cos(n\pi) \Bigr] -\frac{1}{\pi}\Bigl[ \frac{1}{n}\cos(n\pi) -\frac{1}{n} \Bigr]\\
&=\frac{1}{\pi}\Bigl[ \frac{1}{n} -\frac{{(-1)}{^n}}{n} \Bigr] -\frac{1}{\pi}\Bigl[ \frac{(-1)^{n}}{n} -\frac{1}{n} \Bigr]\\
&=\frac{1}{\pi}\biggl(\Bigl[ \frac{1}{n} -\frac{(-1){^n}}{n} \Bigr] -\Bigl[ \frac{{(-1)}^{n}}{n} -\frac{1}{n} \Bigr] \biggr)\\
&=\frac{1}{\pi}\biggl(\frac{2}{n} -\frac{2 {(-1)}^{n}}{n} \biggr)\\
&=\frac{2}{n\pi}\biggl(1 -(-1)^{n} \biggr)\\
&=\frac{2}{\pi}\biggl( \frac{1 +(-1)^{n+1}}{n} \biggr)\\
\end{align*}
$$
{% endraw %}
Por lo tanto, la serie de Fourier de la función es:


{% raw %}
$$
\begin{align*}
f(x)&= \frac{2}{\pi}\sum_{n=1}^{+\infty} \quad \biggl( \frac{1 +(-1)^{n+1}}{n} \biggr) \sin(nx)\\
\end{align*}
$$
{% endraw %}


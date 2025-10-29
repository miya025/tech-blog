'use client';

import { useEffect } from 'react';

export default function CodeBlock() {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll('.article-content pre');

    codeBlocks.forEach((pre) => {
      // すでにボタンが追加されている場合はスキップ
      if (pre.querySelector('.copy-button')) {
        return;
      }

      const code = pre.querySelector('code');
      if (!code) return;

      // ラッパーを作成
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      // コピーボタンを作成
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.innerHTML = `
        <svg class="copy-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <svg class="check-icon hidden" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span class="button-text">Copy</span>
      `;

      button.addEventListener('click', async () => {
        const text = code.textContent || '';
        await navigator.clipboard.writeText(text);

        // アイコンとテキストを変更
        const copyIcon = button.querySelector('.copy-icon');
        const checkIcon = button.querySelector('.check-icon');
        const buttonText = button.querySelector('.button-text');

        copyIcon?.classList.add('hidden');
        checkIcon?.classList.remove('hidden');
        if (buttonText) buttonText.textContent = 'Copied!';
        button.classList.add('copied');

        // 2秒後に元に戻す
        setTimeout(() => {
          copyIcon?.classList.remove('hidden');
          checkIcon?.classList.add('hidden');
          if (buttonText) buttonText.textContent = 'Copy';
          button.classList.remove('copied');
        }, 2000);
      });

      wrapper.appendChild(button);
    });
  }, []);

  return null;
}

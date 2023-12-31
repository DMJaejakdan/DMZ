import dynamic from 'next/dynamic';
import { FormEvent } from 'react';
import PERSON_SEARCH from '@/constants/PERSON_SEARCH';
import { AC } from '@/pages/api/_methods';
import { useRouter } from 'next/router';
const Button = dynamic(() => import('dmzlib/Button'), { ssr: false });
const Spacing = dynamic(() => import('dmzlib/Spacing'), { ssr: false });

const InputBox = dynamic(() => import('dmzlib/InputBox'), {
  ssr: false,
});
const KeywordBox = dynamic(() => import('dmzlib/KeywordBox'), {
  ssr: false,
});

const DateBox = dynamic(() => import('dmzlib/DateBox'), { ssr: false });

function PSearch() {
  const router = useRouter();
  async function searchPerson(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const queryString = new URLSearchParams(
      formData.entries() as any
    ).toString();
    const redirectUrl = `/dmzarchive/personResult?${queryString}`;
    // 리디렉션 실행
    router.push(redirectUrl);
  }
  return (
    <>
      <form onSubmit={searchPerson}>
        <InputBox
          title={PERSON_SEARCH.title.personName}
          placeholder={PERSON_SEARCH.placeholder.personName}
          onInput={() => {}}
          inputId="title"
          inputName="title"
        />
        <Spacing />
        <KeywordBox
          title={PERSON_SEARCH.title.job}
          onFind={input => AC('genre', input)}
          onInput={() => null}
          inputId="area"
          inputName="area"
        />
        <Spacing />
        <KeywordBox
          title={PERSON_SEARCH.title.gender}
          onFind={input => AC('person', input)}
          onInput={() => null}
          inputId="genders"
          inputName="genders"
        />
        <Spacing />
        <KeywordBox
          title={PERSON_SEARCH.title.ages}
          onFind={input => AC('title', input)}
          onInput={() => null}
          inputId="ages"
          inputName="ages"
        />
        <Spacing />
        <DateBox
          title={PERSON_SEARCH.title.time}
          inputId_f="personDateF"
          inputName_f="personDateF"
          inputId_t="personDateT"
          inputName_t="personDateT"
          onFrom={() => null}
          onTo={() => null}
        />
        <Spacing unit={2} />
        <Button
          btnType="submit"
          shape="square"
          size="large"
          width="full"
          color="white"
          label={PERSON_SEARCH.button.search}
        />
        <Spacing />
      </form>
    </>
  );
}

export default PSearch;

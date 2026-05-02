import emailcon from "../assets/email.svg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="mb-4 text-3xl font-bold uppercase sm:text-4xl">
                Datos de Contacto
              </h2>
              <p className="mb-8 text-base text-gray-500">
                ¿Tienes un proyecto en mente? Escríbeme y con gusto me pongo en contacto contigo.
              </p>

              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_941_17577)">
                      <path
                        d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                        fill="currentColor"
                      />
                      <path
                        d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                        fill="currentColor"
                      />
                      <path
                        d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_941_17577">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold text-gray-800">
                    Número de Teléfono
                  </h4>
                  <p className="text-gray-500">(+52) 55 792 26153</p>
                </div>
              </div>

              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <img src={emailcon} alt="Email Icon" width="28" height="28" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold text-gray-800">
                    Email
                  </h4>
                  <p className="text-gray-500">omar.sacnhez9203@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl bg-gray-50 p-6 sm:p-8">
              <form>
                <ContactInputBox
                  type="text"
                  name="name"
                  placeholder="Nombre Completo"
                />
                <ContactInputBox
                  type="text"
                  name="email"
                  placeholder="Correo Electrónico"
                />
                <ContactInputBox
                  type="text"
                  name="phone"
                  placeholder="Teléfono"
                />
                <ContactTextArea
                  row="6"
                  placeholder="Mensaje"
                  name="details"
                  defaultValue=""
                />
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gray-900 p-3 text-white font-medium transition hover:bg-gray-700"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>

              <span className="absolute -right-9 -top-10 z-[-1]">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                    fill="#e5e7eb"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <div className="mb-5">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-gray-700 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
        defaultValue={defaultValue}
      />
    </div>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-5">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-gray-700 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
      />
    </div>
  );
};

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header aria-label="Site Header" className="shadow-sm" id="header">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link href="/">

              <Image
                alt="logo_ezemnia"
                src="/img/ezemnia.png"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium md:flex"
          >
            <Link href="/" passHref>
              <span
                className={`${router.pathname === "/"
                  ? "text-green-500"
                  : "text-gray-500 hover:text-gray-900 transition"
                  }  text-base`}
              >
                Acceuil
              </span>
            </Link>
            <Link href="/produit" passHref>
              <span
                className={`${router.pathname === "/produit"
                  ? "text-green-500"
                  : "text-gray-500 hover:text-gray-900 transition "
                  } text-base`}
              >
                Produits
              </span>
            </Link>
            {/* <Link href="/Catalogue_Ilyos.pdf" passHref>
              <span
                className={`${router.pathname === "/Catalogue_Ilyos.pdf"
                  ? "text-green-500"
                  : "text-gray-500 hover:text-gray-900 transition"
                  }  text-base`}
              >
                Catalogue
              </span>
            </Link> */}
            <Link href="/contact" passHref>
              <span
                className={`${router.pathname === "/contact"
                  ? "text-green-500"
                  : "text-gray-500 hover:text-gray-900 transition"
                  }  text-base`}
              >
                Contact
              </span>
            </Link>
          </nav>



          <div className="md:hidden">
            <button
              className="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {menuOpen && (
              <div className="fixed inset-x-4 top-[3.5rem] bg-white shadow-md p-4 overflow-y-auto z-[1000]">
                <nav aria-label="Mobile Site Nav">
                  <ul className="space-y-4 text-center mx-6 ">
                    <li>
                      <Link href="/" passHref>
                        <span
                          onClick={() => setMenuOpen(false)}
                          className={`${router.pathname === "/blog"
                            ? "text-green-500"
                            : "text-gray-500 hover:text-gray-900 transition "
                            } text-base`}
                        >
                          Acceuil
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/produit" passHref>
                        <span
                          onClick={() => setMenuOpen(false)}
                          className={`${router.pathname === "/produit"
                            ? "text-green-500"
                            : "text-gray-500 hover:text-gray-900 transition"
                            }  text-base`}
                        >
                          Produits
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Catalogue_Ilyos.pdf" passHref>
                        <a
                          onClick={() => setMenuOpen(false)}
                          className={`${router.pathname === "/Catalogue_Ilyos.pdf"
                            ? "text-green-500"
                            : "text-gray-500 hover:text-gray-900 transition"
                            }  text-base`}
                          target="_blank" 
                          rel="noopener noreferrer" 
                        >
                          Catalogue
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" passHref>
                        <span
                          onClick={() => setMenuOpen(false)}
                          className={`${router.pathname === "/contact"
                            ? "text-green-500"
                            : "text-gray-500 hover:text-gray-900 transition "
                            } text-base`}
                        >
                          contact
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
